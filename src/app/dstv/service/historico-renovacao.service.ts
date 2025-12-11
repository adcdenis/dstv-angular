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
    where,
    orderBy
} from '@angular/fire/firestore';
import { getDocs } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { HistoricoRenovacaoI } from '../api/dstvInterfaces';

@Injectable({
  providedIn: 'root'
})
export class HistoricoRenovacaoService {

    private dbHistorico: CollectionReference<DocumentData>;

    constructor(private firestore: Firestore) {
        this.dbHistorico = collection(this.firestore, 'historico-renovacoes');
    }

    getAll() {
        return collectionData(this.dbHistorico, { idField: 'id' }) as Observable<HistoricoRenovacaoI[]>;
    }

    get(id: string) {
        const historicoDocumentReference = doc(this.firestore, `historico-renovacoes/${id}`);
        return docData(historicoDocumentReference, {
            idField: 'id',
        }) as Observable<HistoricoRenovacaoI>;
    }

    create(historico: HistoricoRenovacaoI) {
        return addDoc(this.dbHistorico, historico);
    }

    update(historico: HistoricoRenovacaoI) {
        const historicoDocumentReference = doc(
            this.firestore,
            `historico-renovacoes/${historico.id}`
        );
        return updateDoc(historicoDocumentReference, { ...historico });
    }

    delete(id: string) {
        const historicoDocumentReference = doc(this.firestore, `historico-renovacoes/${id}`);
        return deleteDoc(historicoDocumentReference);
    }

    getAllOrderByDataRenovacao() : Promise<any>{
        const q = query(this.dbHistorico, orderBy("dataHoraRenovacao", "desc"));
        return getDocs(q);
    }

    getByCliente(clienteId: string) {
        const q = query(this.dbHistorico, where("cliente.id", "==", clienteId));
        return getDocs(q);
    }

    getByPlano(planoId: string) {
        const q = query(this.dbHistorico, where("plano.id", "==", planoId));
        return getDocs(q);
    }

    getByServidor(servidorId: string) {
        const q = query(this.dbHistorico, where("servidor.id", "==", servidorId));
        return getDocs(q);
    }

    getByPeriodo(dataInicio: Date, dataFim: Date) {
        const q = query(
            this.dbHistorico, 
            where("dataHoraRenovacao", ">=", dataInicio),
            where("dataHoraRenovacao", "<=", dataFim),
            orderBy("dataHoraRenovacao", "desc")
        );
        return getDocs(q);
    }

    async getByFiltros(clienteId?: string, planoId?: string, servidorId?: string, dataInicio?: Date, dataFim?: Date) {
        // Se houver múltiplos filtros, vamos buscar todos os dados e filtrar no cliente
        // para evitar a necessidade de índices compostos no Firestore
        const temMultiplosFiltros = (clienteId ? 1 : 0) + (planoId ? 1 : 0) + (servidorId ? 1 : 0) + (dataInicio && dataFim ? 1 : 0) > 1;
        
        if (temMultiplosFiltros) {
            // Busca todos os documentos ordenados por data
            const q = query(this.dbHistorico, orderBy("dataHoraRenovacao", "desc"));
            const querySnapshot = await getDocs(q);
            
            // Filtra os resultados no lado do cliente
            let resultados = querySnapshot.docs;
            
            if (clienteId) {
                resultados = resultados.filter(doc => {
                    const data = doc.data();
                    return data['cliente'] && data['cliente'].id === clienteId;
                });
            }
            
            if (planoId) {
                resultados = resultados.filter(doc => {
                    const data = doc.data();
                    return data['plano'] && data['plano'].id === planoId;
                });
            }
            
            if (servidorId) {
                resultados = resultados.filter(doc => {
                    const data = doc.data();
                    return data['servidor'] && data['servidor'].id === servidorId;
                });
            }
            
            if (dataInicio && dataFim) {
                resultados = resultados.filter(doc => {
                    const data = doc.data();
                    const dataRenovacao = data['dataHoraRenovacao'];
                    if (!dataRenovacao) return false;
                    
                    // Converte Timestamp para Date se necessário
                    const dataRenovacaoDate = dataRenovacao.seconds 
                        ? new Date(dataRenovacao.seconds * 1000) 
                        : dataRenovacao;
                    
                    return dataRenovacaoDate >= dataInicio && dataRenovacaoDate <= dataFim;
                });
            }
            
            return querySnapshot; // Retorna o snapshot original para manter compatibilidade
        } else {
            // Se há apenas um filtro ou nenhum, usa a consulta otimizada do Firestore
            let filtros: any[] = [];
            
            if (clienteId) {
                filtros.push(where("cliente.id", "==", clienteId));
            }
            
            if (planoId) {
                filtros.push(where("plano.id", "==", planoId));
            }
            
            if (servidorId) {
                filtros.push(where("servidor.id", "==", servidorId));
            }
            
            if (dataInicio && dataFim) {
                filtros.push(where("dataHoraRenovacao", ">=", dataInicio));
                filtros.push(where("dataHoraRenovacao", "<=", dataFim));
            }
            
            filtros.push(orderBy("dataHoraRenovacao", "desc"));
            
            const q = query(this.dbHistorico, ...filtros);
            return getDocs(q);
        }
    }
}