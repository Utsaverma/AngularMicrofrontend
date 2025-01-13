export const policyDS = [
    {
        policyNumber: 'INS123456',
        insuredName: 'Ravi Kumar',
        policyType: 'Health Insurance',
        startDate: '2023-01-01',
        endDate: '2025-01-01',
        premium: 1200.50,
        policyStatus: 'Active',
        coverageAmount: 500000,
        insurerDetails: {
            name: 'XYZ Insurance Ltd.',
            contact: '+91-9999999999',
            email: 'support@xyzinsurance.com',
            address: '45 Insurance Building, New Delhi, India'
        },
        nomineeDetails: {
            name: 'Priya Kumar',
            relation: 'Wife',
            contact: '+91-8888888888'
        }
    },
    {
        policyNumber: 'INS123457',
        insuredName: 'Anjali Sharma',
        policyType: 'Life Insurance',
        startDate: '2022-05-15',
        endDate: '2032-05-15',
        premium: 1500.75,
        policyStatus: 'Active',
        coverageAmount: 1000000,
        insurerDetails: {
            name: 'ABCD Life Insurances',
            contact: '+91-7777777777',
            email: 'info@abcdlife.com',
            address: '1234 Life Road, Mumbai, Maharashtra, India'
        },
        nomineeDetails: {
            name: 'Rohit Sharma',
            relation: 'Brother',
            contact: '+91-9797979797'
        }
    },
    {
        policyNumber: 'INS123458',
        insuredName: 'Amit Desai',
        policyType: 'Motor Insurance',
        startDate: '2021-10-01',
        endDate: '2024-10-01',
        premium: 2200.00,
        policyStatus: 'Active',
        coverageAmount: 300000,
        insurerDetails: {
            name: 'FastTrack Insurance Pvt. Ltd.',
            contact: '+91-1234567890',
            email: 'support@fasttrackinsure.com',
            address: '55 Transport Avenue, Bangalore, Karnataka, India'
        },
        nomineeDetails: {
            name: 'Sneha Desai',
            relation: 'Wife',
            contact: '+91-9876543210'
        }
    },
    {
        policyNumber: 'INS123459',
        insuredName: 'Neha Singh',
        policyType: 'Health Insurance',
        startDate: '2022-06-10',
        endDate: '2025-06-10',
        premium: 1000.00,
        policyStatus: 'Active',
        coverageAmount: 200000,
        insurerDetails: {
            name: 'HealthFirst Insurance Co.',
            contact: '+91-8080808080',
            email: 'contact@healthfirst.com',
            address: '88 Health St., Hyderabad, Telangana, India'
        },
        nomineeDetails: {
            name: 'Maya Singh',
            relation: 'Mother',
            contact: '+91-9988776655'
        }
    },
    {
        policyNumber: 'INS123460',
        insuredName: 'Rajeev Verma',
        policyType: 'Motor Insurance',
        startDate: '2020-03-20',
        endDate: '2023-03-20',
        premium: 1800.50,
        policyStatus: 'Expired',
        coverageAmount: 400000,
        insurerDetails: {
            name: 'Royal Auto Insure',
            contact: '+91-9998887777',
            email: 'info@royalauto.com',
            address: '300 Motor Street, Chennai, Tamil Nadu, India'
        },
        nomineeDetails: {
            name: 'Arvind Verma',
            relation: 'Brother',
            contact: '+91-9648585959'
        }
    },
    {
        policyNumber: 'INS123461',
        insuredName: 'Sunita Yadav',
        policyType: 'Home Insurance',
        startDate: '2023-02-25',
        endDate: '2026-02-25',
        premium: 2500.00,
        policyStatus: 'Active',
        coverageAmount: 750000,
        insurerDetails: {
            name: 'SafeHome Insurance Pvt. Ltd.',
            contact: '+91-8881223344',
            email: 'support@safehomeinsurance.com',
            address: '77 Home Street, Pune, Maharashtra, India'
        },
        nomineeDetails: {
            name: 'Manoj Yadav',
            relation: 'Husband',
            contact: '+91-9734567890'
        }
    },
    {
        policyNumber: 'INS123462',
        insuredName: 'Vikram Agarwal',
        policyType: 'Life Insurance',
        startDate: '2021-08-18',
        endDate: '2031-08-18',
        premium: 3000.00,
        policyStatus: 'Active',
        coverageAmount: 1500000,
        insurerDetails: {
            name: 'SecureLife Insurance Co.',
            contact: '+91-8883444555',
            email: 'contact@securelife.com',
            address: '12 Life Tower, Kolkata, West Bengal, India'
        },
        nomineeDetails: {
            name: 'Pooja Agarwal',
            relation: 'Wife',
            contact: '+91-8222334455'
        }
    },
    {
        policyNumber: 'INS123463',
        insuredName: 'Alok Patel',
        policyType: 'Health Insurance',
        startDate: '2022-11-05',
        endDate: '2025-11-05',
        premium: 1350.75,
        policyStatus: 'Active',
        coverageAmount: 600000,
        insurerDetails: {
            name: 'MaxHealth Insurances',
            contact: '+91-7050605050',
            email: 'hello@maxhealth.com',
            address: '22 Medical Lane, Ahmedabad, Gujarat, India'
        },
        nomineeDetails: {
            name: 'Suman Patel',
            relation: 'Wife',
            contact: '+91-9001234567'
        }
    },
    {
        policyNumber: 'INS123464',
        insuredName: 'Kavita Rao',
        policyType: 'Home Insurance',
        startDate: '2020-12-15',
        endDate: '2023-12-15',
        premium: 1200.25,
        policyStatus: 'Expired',
        coverageAmount: 400000,
        insurerDetails: {
            name: 'HomeSafe Insurance Ltd.',
            contact: '+91-1234321098',
            email: 'support@homesafeinsurance.com',
            address: '13 Residential Road, Kochi, Kerala, India'
        },
        nomineeDetails: {
            name: 'Ramesh Rao',
            relation: 'Husband',
            contact: '+91-9777384921'
        }
    }
];



export const setPolicyNumber = (policyNumber: string) => {
    localStorage.setItem("policyNumber", policyNumber);
}

export const getPolicyNumber = () => {
    return localStorage.getItem("policyNumber")
}
