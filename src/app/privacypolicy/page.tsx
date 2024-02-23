import Footer from '@/components/Footer';
import React from 'react';

const Page = () => {
  return (
    <div className='flex-none w-full text-[#F8FAFC]'>
        <div className='flex p-5 justify-center w-full bg-[#0F172A] text-[#F8FAFC]'>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p>Welcome to Saurabh&apos;s Virtual Assistant! We are committed to protecting your privacy and ensuring that your personal information is handled responsibly and securely. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our Virtual Assistant services.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">Information We Collect</h2>
        <p>When you use Saurabh&apos;s Virtual Assistant, we may collect certain information from you, including:</p>
        <ul className="list-disc ml-8">
          <li>Personal information: such as your name, email address, and phone number, which you may provide when you sign up for our services or contact us for support.</li>
          <li>Usage information: such as your interactions with our Virtual Assistant, including the commands you give and the responses you receive.</li>
          <li>Device information: such as your device type, operating system, and browser type, which we may collect automatically when you use our services.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">How We Use Your Information</h2>
        <p>We use the information we collect to provide and improve our Virtual Assistant services, including:</p>
        <ul className="list-disc ml-8">
          <li>Responding to your requests and inquiries.</li>
          <li>Customizing your experience and providing personalized recommendations.</li>
          <li>Analyzing usage trends and improving our services.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">Data Security</h2>
        <p>We take the security of your data seriously and have implemented measures to protect it, including:</p>
        <ul className="list-disc ml-8">
          <li>Encryption: We use industry-standard encryption to protect your data during transmission and storage.</li>
          <li>Access controls: We restrict access to your data to authorized personnel only.</li>
          <li>Regular security audits: We conduct regular security audits to identify and address potential vulnerabilities.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">Your Choices</h2>
        <p>You have certain choices regarding the information we collect and how we use it, including:</p>
        <ul className="list-disc ml-8">
          <li>Opting out of certain data collection: You can opt out of certain data collection by adjusting your device settings or contacting us directly.</li>
          <li>Deleting your data: You can request that we delete your data by contacting us directly.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">Third-Party Services</h2>
        <p>We may use third-party services to provide certain features of our Virtual Assistant, such as speech recognition and natural language processing. These third-party services may collect and use your data in accordance with their own privacy policies.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">Changes to This Policy</h2>
        <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on our website, and your continued use of our services after such changes will constitute your acceptance of the updated policy.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">Contact Us</h2>
        <p>If you have any questions or concerns about your privacy or data security, please contact us at saurabhbebi@gmail.com | +91 7004735512.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">Effective Date</h2>
        <p>This Privacy Policy is effective as of 23 February 2024 and applies to all users of Saurabh&apos;s Virtual Assistant.</p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Page;
