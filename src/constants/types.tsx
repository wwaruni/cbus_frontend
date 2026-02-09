export type Customer = {
    customerId: string;
    fullName: string;
    email: string;
    registrationDate: string;
}

export type CustomerDetails = {
    id: number;
    customer_id: string;
    full_name: string;
    email: string;
    registration_date: string;
    created_at: string;
    updated_at: string;
}

export type CustomerDetailsApiResponse = { 
    items: CustomerDetails[];
    total: number;
}