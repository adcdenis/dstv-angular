import { Injectable } from '@angular/core';
import {
    addDoc,
    collection,
    collectionData,
    CollectionReference,
    deleteDoc,
    doc,
    docData,
    DocumentData,
    Firestore,
    updateDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ClienteI } from '../api/dstvInterfaces';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

    private dbCliente: CollectionReference<DocumentData>;

    constructor(private firestore: Firestore) {
        this.dbCliente = collection(this.firestore, 'cliente');
    }

    getAll() {
        return collectionData(this.dbCliente, { idField: 'id' }) as Observable<ClienteI[]>;
    }

    get(id: string) {
        const clienteDocumentReference = doc(this.firestore, `cliente/${id}`);
        return docData(clienteDocumentReference, {
            idField: 'id',
        }) as Observable<ClienteI>;
    }

    create(cliente: ClienteI) {
        return addDoc(this.dbCliente, cliente);
    }

    update(cliente: ClienteI) {
        const clienteDocumentReference = doc(
            this.firestore,
            `cliente/${cliente.id}`
        );
        return updateDoc(clienteDocumentReference, { ...cliente });
    }

    delete(id: string) {
        const clienteDocumentReference = doc(this.firestore, `cliente/${id}`);
        return deleteDoc(clienteDocumentReference);
    }
}
