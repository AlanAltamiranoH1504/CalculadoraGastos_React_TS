export type MenuItem ={
    id: number;
    name: string;
    price: number;
}

export type OrderItem = MenuItem & {
    cantidad: number;
}

export type Propina = {
    id: string;
    value: number;
    label: string
}
