import React from "react";

const OrderDetails = () => {
    return (
        <React.Fragment>
            <figure>
                <div className="md:border sm:border-0 md:shadow-md w-full md:p-6 space-y-3">
                    <div className="pb-4 border-b">
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <h1 className="font-semibold md:text-xl sm:text-lg">Order ID - 100230</h1>
                                <p className="text-gray-600 md:text-sm sm:text-xs">Date : Thu 23rd Jan 2023</p>
                            </div>
                            <p className="alert-warning-sm">Order Placed</p>
                        </div>
                    </div>
                    <div className="py-4 border-b">
                        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 md:divide-x">
                            <figure>
                                <h1 className="font-medium text-lg mb-1">Contact</h1>
                                <div className="space-y-1">
                                    <p className="text-sm text-gray-700">Labhansh Satpute</p>
                                    <p className="text-sm text-gray-700">Phone : 8668395680</p>
                                    <p className="text-sm text-gray-700">Email : labhansh25@gmail.com</p>
                                </div>
                            </figure>
                            <figure className="md:pl-5">
                                <h1 className="font-medium text-lg mb-1">Address</h1>
                                <div className="space-y-1">
                                    <p className="text-sm text-gray-700">Flat. No. 304, SkyHigh Apartments,</p>
                                    <p className="text-sm text-gray-700">Manish Nagar, Somalwada,</p>
                                    <p className="text-sm text-gray-700">Nagpur - 440001, Maharashtra</p>
                                </div>
                            </figure>
                            <figure className="md:pl-5">
                                <h1 className="font-medium text-lg mb-1">Payment</h1>
                                <div className="space-y-1">
                                    <p className="text-sm text-gray-700">Amount : {process.env.REACT_APP_CURRENCY}599.00</p>
                                    <p className="text-sm text-gray-700">Method : Prepaid - Razorpay - UPI</p>
                                    <p className="text-sm text-gray-700">Status : <span className="text-green-600">Payment Completed</span></p>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className="py-4 border-b">
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">


                            <figure className="flex items-start justify-start space-x-3">
                                <div className="h-[110px] w-[110px] flex items-center justify-center overflow-clip rounded-md">
                                    <img src="/images/product/product-img-1.png" alt="product-img" className="w-full h-auto" />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-medium text-base">Nike Mens Air Zoom Pegasus Shoes</p>
                                    <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-700">Quantity : 1</p>
                                        <p className="text-xs text-gray-700">Price : 1 × {process.env.REACT_APP_CURRENCY}599.00 = {process.env.REACT_APP_CURRENCY}599.00</p>
                                    </div>
                                </div>
                            </figure>

                        </div>
                    </div>
                    <div className="py-4 border-b">
                        <div className="md:w-[50%] sm:w-full">
                            <h1 className="font-semibold text-lg mb-3">Order Summary</h1>
                            <div className="space-y-3">
                                <div>
                                    <table className="w-full">

                                        <tr>
                                            <td className="pb-2">
                                                <div>
                                                    <p className="font-medium text-sm">Batman Superman: World's Finest</p>
                                                    <p className="text-xs text-slate-600 mt-1">1 × {process.env.REACT_APP_CURRENCY}599.00 = {process.env.REACT_APP_CURRENCY}599.00</p>
                                                </div>
                                            </td>
                                            <td className="pb-2 font-semibold align-baseline" align="right">{process.env.REACT_APP_CURRENCY}599.00</td>
                                        </tr>

                                        <tr>
                                            <td className="pb-2">
                                                <div>
                                                    <p className="font-medium text-sm">Coupon Discount</p>
                                                </div>
                                            </td>
                                            <td className="pb-2 font-semibold align-baseline" align="right">-{process.env.REACT_APP_CURRENCY}599.00</td>
                                        </tr>

                                        <tr>
                                            <td className="pb-2">
                                                <div>
                                                    <p className="font-medium text-sm">Delivery Charges</p>
                                                </div>
                                            </td>
                                            <td className="pb-2 font-semibold align-baseline" align="right">{process.env.REACT_APP_CURRENCY}50.00</td>
                                        </tr>

                                    </table>
                                </div>
                                <hr/>
                                    <div>
                                        <table className="w-full">
                                            <tr>
                                                <td className="font-semibold text-lg">Grand Total : </td>
                                                <td className="font-semibold text-lg" align="right">{process.env.REACT_APP_CURRENCY}599.00</td>
                                            </tr>
                                        </table>
                                    </div>
                            </div>
                        </div>

                    </div>

                    <div className="pt-4 flex items-center space-x-4 md:justify-start sm:justify-evenly">

                        <a href="#" className="md:w-auto sm:w-full"><button className="btn-primary-md md:w-auto sm:w-full flex items-center justify-center">Download Invoice</button></a>

                        <a href="#" className="md:w-auto sm:w-full"><button className="btn-danger-md md:w-auto sm:w-full">Cancel Order</button></a>

                    </div>

                </div>
            </figure>
        </React.Fragment>
    );
}

export default OrderDetails;