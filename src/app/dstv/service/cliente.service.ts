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
    query,
    updateDoc,
    where} from '@angular/fire/firestore';
import { getDocs, orderBy } from 'firebase/firestore';
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

    getAllOrderByVencimento() : Promise<any>{
        const q = query(this.dbCliente, orderBy("dataVencimento"));
        return getDocs(q);
        // const querySnapshot = await getDocs(q);
        // querySnapshot.forEach((doc) => {
        //     console.log(doc.id, ' => ', doc.data());
        // });
    }

    getByServidor(servidorId: string) {
        const q = query(this.dbCliente, where("servidor.id", "==", servidorId));
        return getDocs(q);
    }

    getByPlano(planoId: string) {
        const q = query(this.dbCliente, where("plano.id", "==", planoId));
        return getDocs(q);
    }
}
