"use client";

import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUserModal() {

    const onSubmit = async(e)=>{
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

        // console.log({name, image})

        await authClient.updateUser({
            image,
            name 
            
        })


    }
  return (
    <Modal>
      <Button className="text-pink-500" variant="secondary"><BiEdit></BiEdit> Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-pink-500-soft text-pink-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-pink-500">Update user</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url" variant="secondary">
                    <Label>Image url</Label>
                    <Input placeholder="Image url" />
                  </TextField>


                  <Modal.Footer>
              <Button className='text-pink-500' slot="close" variant="secondary">
                Cancel
              </Button>
              <Button className='bg-pink-500' type="submit">Update</Button>
            </Modal.Footer>
                  
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}