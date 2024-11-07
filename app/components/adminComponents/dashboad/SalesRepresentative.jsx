import React from "react";
import {Listbox, ListboxItem, Avatar, Button} from "@nextui-org/react";
import {users} from "./userData";

export default function SalesRepresentative() {
  return (
    <div className="w-full border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
      <Listbox
        topContent={<div className="flex justify-between">
                      <div className="px-2">
                        <h1>Daily Transaction</h1>
                        <span className="text-sm text-default-400">Data from today</span>
                      </div>
                      <Button size="sm" variant="bordered">View Report</Button>
                    </div>
                    }
        classNames={{
          list: "max-h-[320px] overflow-scroll",
        }}
        defaultSelectedKeys={["1"]}
        items={users}
        label="Assigned to"
        variant="flat"
      >
        {(item) => (
          <ListboxItem key={item.id} textValue={item.name}>
            <div className="flex gap-2 items-center">
              <Avatar alt={item.name} className="flex-shrink-0" size="sm" src={item.avatar} />
              <div className="flex flex-col">
                <span className="text-small">{item.name}</span>
                <span className="text-tiny text-default-400">{item.email}</span>
              </div>
              <span className="w-full text-right">+30%</span>
            </div>
          </ListboxItem>
        )}
      </Listbox>
    </div>
  );
}
