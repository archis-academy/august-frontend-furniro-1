import BillingDetailsForm from '../../Components/BillingDetails'
import PageHeader from '../../Components/PageHeader'

const CheckoutPage = () => {
    return (
        <div className='checkoutPage'>
            <div>
                <PageHeader />
            </div>
            <div>
                <BillingDetailsForm />
            </div>
        </div>
    )
}

export default CheckoutPage