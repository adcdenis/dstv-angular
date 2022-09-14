export interface ServidorI {
    id?: string;
    nome?: string;
}

export interface PlanoI {
    id?: string;
    nome?: string;
    valor?: number;
}

export interface ClienteI {
    id?: string;
    nome?: string;
    usuario?: string;
    email?: string;
    telefone?: number;
    observacao?: string;
    dataVencimento?: Date;
    //combos
    idServidor?: number;
    idPlano?: number;
}

