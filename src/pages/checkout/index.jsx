import BillingDetailsForm from '../../Components/BillingDetails'
import CheckoutDetails from '../../Components/CheckoutDetails'
import PageHeader from '../../Components/PageHeader'
import './checkoutpage.scss'
const CheckoutPage = () => {
    return (
        <div className='checkoutPage'>
            <div className='checkoutPage_header'>
                <PageHeader />
            </div>
            <div className='checkoutPage_grid'>
                <section>
                    <BillingDetailsForm />
                </section>
                <aside>
                    <CheckoutDetails />
                </aside>
            </div>
        </div>
    );
};

export default CheckoutPage