import { Contact } from "../model/contact.model";

export class ContactService{

    private contacts: Contact []=

    [{"nombre":"Victor Gonzalez","organizacion":"UC3M","movil":"685256253",correo:"victor@gmail.com"}];

    constructor(){

    }

    addContact(value: Contact){

        this.contacts.push(value);

    }

    getContacts(){

        return this.contacts;
    }

    updateContact(value: Contact){
        

    }

    removeContact(value: Contact){


    }
}