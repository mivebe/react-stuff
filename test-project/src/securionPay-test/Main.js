import React, { useEffect } from 'react'
import securionpay from 'securionpay';
// import $ from "jquery"
//import 'https://securionpay.com/checkout.js';
//import 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js';


const Main = () => {

    // useEffect(() => {
    //     // const script = document.createElement('script')
    //     // script.src = "https://securionpay.com/checkout.js";
    //     // document.body.appendChild(script)

    //     // const script2 = document.createElement("script")
    //     // script2.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"
    //     // document.body.appendChild(script2)

    //     $(function () {
    //         SecurionpayCheckout.key = 'pu_test_WVMFC9GFuvm54b0uorifKkCh';
    //         SecurionpayCheckout.success = function (result) {
    //             // handle successful payment (e.g. send payment data to your server)
    //         };
    //         SecurionpayCheckout.error = function (errorMessage) {
    //             // handle integration errors (e.g. send error notification to your server)
    //         };

    //         $('#payment-button').click(function () {
    //             SecurionpayCheckout.open({
    //                 checkoutRequest: 'Y2Y5Y2UyZDgzMzFjNTMxZjgzODlhNjE2YTE4Zjk1NzhjMTM0Yjc4NGRhYjVjYjdlNGI1OTY0ZTc3OTBmMTczY3x7ImNoYXJnZSI6eyJhbW91bnQiOjQ5OSwiY3VycmVuY3kiOiJFVVIifX0=',
    //                 name: 'SecurionPay',
    //                 description: 'Checkout example'
    //             });
    //         });
    //     });
    // })

    async function doPayment(ev) {
        let api = securionpay('pu_test_WVMFC9GFuvm54b0uorifKkCh');
        console.log(api);
        // let res = await api.tokens.create({
        //     number: '4242424242424242',
        //     expMonth: 11,
        //     expYear: 2022,
        //     cvc: 123,
        //     cardholderName: 'John Doe'
        // })

        // console.log(res);

        let token = { id: 'tok_EQtCtdkmFkLuXIlI6WwYhN8r' }

        let res1 = await api.charges.create({
            amount: 256,
            currency: 'EUR',
            card: token.id,
            description: 'Testing charge'
        });

        console.log(res1);


        /*
brand: "Visa"
cardholderName: "John Doe"
country: "CH"
created: 1612115580
expMonth: "11"
expYear: "2022"
fingerprint: "nHV0cI7tBJLRTpQc"
first6: "424242"
fraudCheckData: {ipAddress: "93.123.61.79", ipCountry: "BG", userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWeb…L, like Gecko) Chrome/88.0.4324.104 Safari/537.36", acceptLanguage: "en,en-US;q=0.9,bg;q=0.8"}
id: "tok_EQtCtdkmFkLuXIlI6WwYhN8r"
last4: "4242"
objectType: "token"
type: "Credit Card"
used: false
         */

        // SecurionpayCheckout.key = 'pu_test_WVMFC9GFuvm54b0uorifKkCh';
        // SecurionpayCheckout.success = function (result) {
        //     // handle successful payment (e.g. send payment data to your server)
        // };
        // SecurionpayCheckout.error = function (errorMessage) {
        //     // handle integration errors (e.g. send error notification to your server)
        // };

        // SecurionpayCheckout.open({
        //     checkoutRequest: 'Y2Y5Y2UyZDgzMzFjNTMxZjgzODlhNjE2YTE4Zjk1NzhjMTM0Yjc4NGRhYjVjYjdlNGI1OTY0ZTc3OTBmMTczY3x7ImNoYXJnZSI6eyJhbW91bnQiOjQ5OSwiY3VycmVuY3kiOiJFVVIifX0=',
        //     name: 'SecurionPay',
        //     description: 'Checkout example'
        // });
    }

    return (
        <>
            <button id="payment-button" onClick={doPayment}>Payment button</button>
        </>
    )
}

export default Main
