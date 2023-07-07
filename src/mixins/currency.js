export default {
    methods: {
        currency(value) {
            const currency = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            });
            return currency.format(value);
        },
    }
}