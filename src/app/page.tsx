import Footer from '@/shared/footer';
import Navbar from '../shared/navbar';
import Landing from '@/shared/landing';
import Offer from '@/shared/offerSection';
export default function Home() {

  return (
    <main className="bg-gradient-to-r from-yellow-400 to-orange-500 min-h-screen">
     <Navbar />
   <Landing />
     <Offer />
     <div className='pt-24'>
<Footer />
</div>
    </main>
  );
}
