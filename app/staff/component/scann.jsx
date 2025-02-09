'use client';

import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { RiQrScanLine } from 'react-icons/ri';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useRouter } from 'next/navigation';
import { decodeToken } from '@/app/utils/decodeToken';
import { useUserStore } from '@/app/stores/userStore';
import { getDateAndTime } from '../../composables/dateAndTime';
import axios from 'axios';
// import { NextResponse } from 'next/server';

export default function Scann({ onSucess }) {
  const [scanResult, setScanResult] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { users, fetchUsers } = useUserStore();
  const router = useRouter();
  const [user, setUser] = useState({ name: '', id: '', role: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [succesMessage, setSuccessMessage] = useState('');
  const [datee, setDate] = useState('');
  // const { date, time } = getDateAndTime();
  const [log_data, setLogData] = useState({
    // date: ' ',
    // date: ' ',
    status: ' ',
    employeeID: '',
  });

  const [timeinOut, setTimeinOut] = useState([]);

  useEffect(() => {
    fetchUsers();

    const loadUser = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        const decode = await decodeToken(token);
        setUser(decode);

        if (user) {
          if (!['staff'].includes(decode.role)) {
            router.replace('/');
            localStorage.removeItem('token');
          }
        }
      } else {
        router.replace('/');
      }
    };

    loadUser();
  }, [router]);

  useEffect(() => {
    getimeInOutData();

    if (isOpen) {
      const readerElement = document.getElementById('reader');
      if (readerElement) {
        const scanner = new Html5QrcodeScanner(
          'reader',
          {
            qrbox: {
              width: 180,
              height: 180,
            },
            fps: 5,
          },
          false,
        );

        scanner.render(handleScanSuccess, handleScanError);

        return () => {
          scanner
            .clear()
            .catch((error) => console.error('Failed to clear scanner', error));
        };
      }
    }
  }, [isOpen]);

  const getimeInOutData = async () => {
    try {
      const responesTimeInout = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/collection/getHRIStimeinOut`,
      );
      setTimeinOut(responesTimeInout.data);
    } catch (error) {
      console.log('Faild to fetch', error);
    }
  };

  const scannerSound = () => {
    const audio = new Audio('/beep.mp3');
    audio.play();
  };

  let scanStop = false;
  const handleScanSuccess = async (result) => {
    const findStaff = users.find((user) => user.id === result);

    if (findStaff) {
      console.log("User is found", findStaff);
      scannerSound();
      try {
        const { date, time } = getDateAndTime();


        const existingRecord = timeinOut.find(
          (entry) =>
            entry.employeeID === findStaff.id &&
            entry.status === "time-in" &&
            entry.date === date
        );

        if (existingRecord) {

          const responseUpdate = await axios.put(
            `${process.env.NEXT_PUBLIC_API_URL}/collection/hristimeout/${existingRecord._id}`,
            {
              date,
              time_out: time,
              status: "time-out",
              overtime_status: ' Awaiting Approval',
            }
          );
          console.log("Timeout updated:", responseUpdate.data);

          setLogData(responseUpdate.data);
          onSucess("Timeout recorded successfully");
        } else {

          const responseScann = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/collection/hris`,
            {
              date: date,
              time_in: time,
              time_out: "",
              status: "time-in",
              overtime_status: ' Awaiting Approval',
              employeeID: findStaff.id,
            }
          );
          console.log("Time-in recorded:", responseScann.data);

          setLogData(responseScann.data);
          onSucess("Time-in recorded successfully");


          scanStop = true;
          setTimeout(() => {
            scanStop = false;
          }, 30000);
        }
      } catch (error) {
        console.error("Error processing scan:", error.response?.data || error);
        onSucess(
          "An error occurred while processing the scan. Please try again."
        );
      }

      console.log("User is found");
      setSuccessMessage("User is found");
    } else {
      console.warn("User not found");
      setErrorMessage("User not found");

      onSucess("User not found. Please try again.");
    }
  };
  // let scanStop = false;
  // const handleScanSuccess = async (result) => {
  //   const findStaff = users.find((user) => user.id === result);

  //   if (findStaff) {
  //     console.log("User is found", findStaff);
  //     scannerSound();
  //     try {
  //       const { date, time } = getDateAndTime(); 


  //       const existingRecord = timeinOut.find(
  //         (entry) =>
  //           entry.employeeID === findStaff.id &&
  //           entry.status === "time-in" &&
  //           entry.date === date
  //       );

  //       if (existingRecord) {

  //         const responseUpdate = await axios.put(
  //           `${process.env.NEXT_PUBLIC_API_URL}/collection/hristimeout/${existingRecord._id}`,
  //           {
  //             date,
  //             time_out: time,
  //             overtime_status: ' Awaiting Approval',
  //             status: "time-out",
  //           }
  //         );
  //         console.log("Timeout updated:", responseUpdate.data);

  //         setLogData(responseUpdate.data);
  //         onSucess("Timeout recorded successfully");
  //       } else {

  //         const responseScann = await axios.post(
  //           `${process.env.NEXT_PUBLIC_API_URL}/collection/hris`,
  //           {
  //             date: date,
  //             time_in: time,
  //             time_out: "",
  //             overtime_status: ' Awaiting Approval',
  //             status: "time-in",
  //             employeeID: findStaff.id,
  //           }
  //         );
  //         console.log("Time-in recorded:", responseScann.data);

  //         setLogData(responseScann.data);
  //         onSucess("Time-in recorded successfully");


  //         scanStop = true;
  //         setTimeout(() => {
  //           scanStop = false;
  //         }, 30000);
  //       }
  //     } catch (error) {
  //       console.log(error,'sayup')
  //       onSucess(
  //         "An error occurred while processing the scan. Please try again."
  //       );
  //     }

  //     console.log("User is found");
  //     setSuccessMessage("User is found");
  //   } else {
  //     console.warn("User not found");
  //     setErrorMessage("User not found");

  //     onSucess("User not found. Please try again.");
  //   }
  // };


  const handleScanError = (error) => {
    console.warn('QR Code Scan Error:', error);
  };

  return (
    <>
      <Button
        className=""
        onPress={onOpen}
        color="transparent"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <RiQrScanLine
          className="h-6 w-6 mr-2 text-white dark:text-white"
          color="primary"
        />
      </Button>
      <Modal
        size="lg"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                <h2>QR Code Scanner</h2>
              </ModalHeader>
              <ModalBody>
                <div
                  className="flex flex-col items-center gap-4"
                  style={{
                    backgroundColor: '#f0f4f8',
                    padding: '20px',
                    borderRadius: '10px',
                  }}
                >
                  {scanResult ? (
                    <div className="text-center">
                      <h3 className="text-green-600 font-semibold">
                        Scan Successful!
                      </h3>
                      <p>{scanResult}</p>
                    </div>
                  ) : (
                    <div
                      id="reader"
                      style={{
                        width: '100%',
                        maxWidth: '300px',
                        height: '250px',
                      }}
                    />
                  )}

                  {errorMessage && (
                    <div>
                      <span className="text-red ">{errorMessage}</span>
                    </div>
                  )}
                  {succesMessage && (
                    <div>
                      <span className="text-green">{succesMessage}</span>
                    </div>
                  )}
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
