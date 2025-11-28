import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  Firestore,
  getDocs,
  query,
  updateDoc,
  where
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MensagemTemplateI } from '../api/dstvInterfaces';

@Injectable({ providedIn: 'root' })
export class MensagemService {
  private dbMensagem: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.dbMensagem = collection(this.firestore, 'mensagem');
  }

  getAll(): Observable<MensagemTemplateI[]> {
    return collectionData(this.dbMensagem, { idField: 'id' }) as Observable<MensagemTemplateI[]>;
  }

  create(mensagem: MensagemTemplateI) {
    const payload = { ...mensagem, criadoEm: Date.now() };
    return addDoc(this.dbMensagem, payload);
  }

  update(mensagem: MensagemTemplateI) {
    const ref = doc(this.firestore, `mensagem/${mensagem.id}`);
    return updateDoc(ref, { ...mensagem });
  }

  delete(id: string) {
    const ref = doc(this.firestore, `mensagem/${id}`);
    return deleteDoc(ref);
  }

  async getAtiva(): Promise<MensagemTemplateI | null> {
    const q = query(this.dbMensagem, where('ativo', '==', true));
    const snap = await getDocs(q);
    if (snap.docs.length > 0) {
      const d = snap.docs[0];
      const data = d.data() as MensagemTemplateI;
      return { ...data, id: d.id };
    }
    return null;
  }
}
