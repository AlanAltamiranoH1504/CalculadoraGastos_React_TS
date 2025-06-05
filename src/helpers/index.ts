
function formatCurrency(monto: number){
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(monto);
}

export {
    formatCurrency
}