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
import { PlanoI } from '../api/dstvInterfaces';


@Injectable({
  providedIn: 'root'
})
export class PlanoService {

    private dbPlano: CollectionReference<DocumentData>;

    constructor(private firestore: Firestore) {
        this.dbPlano = collection(this.firestore, 'plano');
    }

    getAll() {
        return collectionData(this.dbPlano, { idField: 'id' }) as Observable<
            PlanoI[]
        >;
    }

    get(id: string) {
        const planoDocumentReference = doc(this.firestore, `plano/${id}`);
        return docData(planoDocumentReference, {
            idField: 'id',
        }) as Observable<PlanoI>;
    }

    create(plano: PlanoI) {
        return addDoc(this.dbPlano, plano);
    }

    update(plano: PlanoI) {
        const planoDocumentReference = doc(
            this.firestore,
            `plano/${plano.id}`
        );
        return updateDoc(planoDocumentReference, { ...plano });
    }

    delete(id: string) {
        const planoDocumentReference = doc(this.firestore, `plano/${id}`);
        return deleteDoc(planoDocumentReference);
    }
}
