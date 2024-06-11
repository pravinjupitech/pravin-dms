import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    Size: {
        type: Number
    },
    primaryUnit: {
        type: String
    },
    secondaryUnit: {
        type: String
    },
    secondarySize: {
        type: String
    },
    qty: {
        type: Number
    },
    price: {
        type: Number
    },
    totalPrice: {
        type: Number
    },
    sgstRate: {
        type: Number
    },
    cgstRate: {
        type: Number
    },
    igstRate: {
        type: Number
    },
    taxableAmount: {
        type: Number
    },
    grandTotal: {
        type: Number
    },
    unitType: {
        type: String
    },
    discountPercentage: {
        type: Number
    },
    gstPercentage: {
        type: String
    },
    totalPriceWithDiscount: {
        type: Number
    },
    status: {
        type: String,
        default: "ordered"
    },
    date: {
        type: Date,
        default: Date.now
    },
    igstTaxType: {
        type: Boolean
    }
}, { timestamps: true });
const CreateInvoiceSchema = new mongoose.Schema({
    invoiceId: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    database: {
        type: String
    },
    partyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "party"
    },
    orderId: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
    },
    DateofDelivery: {
        type: String
    },
    fullName: {
        type: String
    },
    address: {
        type: String
    },
    MobileNo: {
        type: Number
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    landMark: {
        type: String
    },
    pincode: {
        type: Number
    },
    grandTotal: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    shippingCost: {
        type: Number,
        default: 0
    },
    taxAmount: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: "pending"
    },
    geotagging: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    currentAddress: {
        type: String
    },
    paymentId: {
        type: String
    },
    paymentMode: {
        type: String
    },
    orderItems: [orderItemsSchema],
    roundOff: {
        type: Number
    },
    amount: {
        type: Number
    },
    sgstTotal: {
        type: Number
    },
    cgstTotal: {
        type: Number
    },
    igstTotal: {
        type: Number
    },
    discountAmount: {
        type: Number
    },
    igstTaxType: {
        type: Number
    },
    gstDetails: [{
        hsn: {
            type: String
        },
        taxable: {
            type: Number
        },
        centralTax: [{
            rate: {
                type: Number
            },
            amount: {
                type: Number
            }
        }],
        stateTax: [{
            rate: {
                type: Number
            },
            amount: {
                type: Number
            }
        }],
        igstTax: [{
            rate: {
                type: Number
            },
            amount: {
                type: Number
            }
        }],
        discountPercentage: {
            type: Number
        },
        withoutDiscountAmount: {
            type: Number,
        },
        withDiscountAmount: {
            type: Number
        },
        withoutTaxablePrice: {
            type: Number
        }
    }],
    transporter: {
        type: Object
    },
    vehicleNo: {
        type: String
    },
    otherCharges: {
        type: Number
    },
    gstOtherCharges: [],
    ARN: {
        type: String
    },
    ARNStatus: {
        type: Boolean,
        default: false
    },
    invoiceType: {
        type: String
    },
    invoiceStatus: {
        type: Boolean
    },
    overAllDiscountPer: {
        type: Number
    },
    overAllCharges: {
        type: Number
    },
    discountDetails: [
        {
            discountedAmount: {
                type: Number
            },
            percentage: {
                type: Number
            },
            title: {
                type: String
            },
            disType: {
                type: String
            }
        }
    ],
    chargesDetails: [
        {
            chargedAmount: {
                type: Number
            },
            percentage: {
                type: Number
            },
            title: {
                type: String
            },
            chargedType: {
                type: String
            }
        }
    ]
}, { timestamps: true });

export const InvoiceList = mongoose.model("invoiceList", CreateInvoiceSchema);