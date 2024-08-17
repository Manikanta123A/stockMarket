import React from 'react';
import Certificate from './Certification';
import Eligibility from './Eligibility';
import Iamge from './Image';
import FAQ from './Faq';
function CertificatPag() {
    return ( <>
    <Certificate/>
    <Eligibility/>
    <Iamge/>
    <p className='px-lg-5 mx-lg-5'> <p></p> <h2 className='px-lg-2 mx-lg-5'>FAQ</h2> </p>
    <FAQ/>
    </>
     );
}

export default CertificatPag;