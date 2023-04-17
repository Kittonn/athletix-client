import axios, { AxiosResponse } from "axios";
import { parseCookies } from "nookies";
import { IToken } from "@/interfaces/token";
import { IBooking } from "@/interfaces/booking";
import { GetServerSidePropsContext } from "next";

export const createBookingService = async (booking: IBooking) => {
    try {
        const CookiesToken: IToken = parseCookies();
        if (CookiesToken.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${CookiesToken.token}`;
            const response: AxiosResponse = await axios.post(
                'http://localhost:4000/booking',
                booking
            );
            return response.data;
        }
    } catch (err) {
        if (axios.isAxiosError(err)) {
            throw Error(err.response?.data?.detail || 'Failed to create booking');
        } else {
            throw Error('Failed to create booking');
        }
    }
}

export const createPromptpayPayment = async (booking_id: string | undefined, payment_id: string | undefined, slip_image: string) => {
    try {
        const CookiesToken: IToken = parseCookies();
        if (CookiesToken.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${CookiesToken.token}`;
            const response: AxiosResponse = await axios.post('http://localhost:4000/payments/pay/promptpay', { booking_id, payment_id, slip_image }
            );
            return response.data;
        }
    } catch (err) {
        console.log(err);
    }
}

export const createCashPayment = async (booking_id: string | undefined, cash: number | undefined) => {
    try {
        const CookiesToken: IToken = parseCookies();
        if (CookiesToken.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${CookiesToken.token}`;
            const response: AxiosResponse = await axios.post('http://localhost:4000/payments/pay/cash', { booking_id, cash }
            );
            return response.data;
        }
    } catch (err) {
        console.log(err);
    }
}

export const getBookingService = async (context: GetServerSidePropsContext) => {
    try {
        const CookiesToken: IToken = parseCookies(context);
        if (CookiesToken.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${CookiesToken.token}`;
            const response: AxiosResponse = await axios.get('http://127.0.0.1:4000/booking/');
            return response.data;
        }
    } catch (err) {
        console.log(err);
    }
}

export const approveBookingService = async (booking_id: string) => {
    try {
        const CookiesToken: IToken = parseCookies();
        if (CookiesToken.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${CookiesToken.token}`;
            const response: AxiosResponse = await axios.post('http://localhost:4000/booking/approve', { booking_id });
            return response.data;
        }
    } catch (err) {
        console.log(err);
    }
}