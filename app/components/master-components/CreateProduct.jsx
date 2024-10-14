"use client"
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { MdAdd } from 'react-icons/md';
// import { Input } from "@nextui-org/react";

export default function CreateProduct() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const handleOpen = () => {
    onOpen();
  }

  return (
    <>
      <div class="p-md">
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            </div>
            <div className="py-3 px-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Product / Services
            </h5>
            </div>
            <div className="p-6 pt-0">
            <Button color="primary" onPress={handleOpen}><MdAdd/> product / service</Button>
            </div>
        </div>
          <Modal 
              size="2xl"
              isOpen={isOpen} 
              onClose={onClose} 
          >
              <ModalContent>
              {(onClose) => (
                  <>
                  <ModalHeader className="flex flex-col gap-1">Product Master Data</ModalHeader>
                  <ModalBody>
                      <div>
                        
                      </div>
                  </ModalBody>
                  <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                      Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                      Action
                      </Button>
                  </ModalFooter>
                  </>
              )}
              </ModalContent>
          </Modal>    
        </div>
    </>
  );
}
