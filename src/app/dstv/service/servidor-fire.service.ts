import { ServidorI } from './../api/dstvInterfaces';
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
    DocumentReference,
    Firestore,
    updateDoc,
    writeBatch
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ServidorFireService {
    private dbServidor: CollectionReference<DocumentData>;

    constructor(private firestore: Firestore) {
        this.dbServidor = collection(this.firestore, 'servidor');
    }

    getAll() {
        return collectionData(this.dbServidor, { idField: 'id' }) as Observable<
            ServidorI[]
        >;
    }

    get(id: string) {
        const servidorDocumentReference = doc(this.firestore, `servidor/${id}`);
        return docData(servidorDocumentReference, {
            idField: 'id',
        }) as Observable<ServidorI>;
    }

    create(servidor: ServidorI) {
        return addDoc(this.dbServidor, servidor);
    }

    update(servidor: ServidorI) {
        const servidorDocumentReference = doc(
            this.firestore,
            `servidor/${servidor.id}`
        );
        return updateDoc(servidorDocumentReference, { ...servidor });
    }

    delete(id: string) {
        const servidorDocumentReference = doc(this.firestore, `servidor/${id}`);
        return deleteDoc(servidorDocumentReference);
    }

    public deleteMultiple(servidor: DocumentReference<ServidorI>[]) {
        const batch = writeBatch(this.firestore);

        servidor.forEach((elem) => {
            batch.delete(elem);
        });

        batch.commit();
    }
}
