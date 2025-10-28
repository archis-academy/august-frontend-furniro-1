import BillingDetailsForm from '../../Components/BillingDetails'
import PageHeader from '../../Components/PageHeader'

const CheckoutPage = () => {
    return (
        <div className='checkoutPage'>
            <PageHeader />
            <BillingDetailsForm />
        </div>
    )
}

export default CheckoutPage