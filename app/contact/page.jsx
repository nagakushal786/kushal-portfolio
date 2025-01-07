"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9392684533"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "nagakushal10@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Flat no: 203, Sri Hari Sadan, Fort, Near King Market, Kurnool, 518001"
  }
];

const Alert = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-black text-accent p-4 rounded-lg" style={{ width: '50%', height: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ marginBottom: '20px', textAlign: 'center' }}>{message}</p>
      <Button onClick={onClose}>Close</Button>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [alertInfo, setAlertInfo] = useState({ show: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_y94jdh4', 'template_tynboh8', formData, 'EERgap5O7HSM7OPxb')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setAlertInfo({ show: true, message: 'Your details are sent successfully!' });
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setAlertInfo({ show: true, message: 'Failed to send your details, please try again.' });
      });
  };

  const closeAlert = () => setAlertInfo({ show: false, message: '' });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.7, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">Let&apos;s connect for gaining more expertise in building real-time applications and expand my knowledge in this field by thriving deep &#128515;</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required/>
                <Input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required/>
                <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
                <Input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required/>
              </div>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Frontend">Frontend development</SelectItem>
                    <SelectItem value="Backend">Backend development</SelectItem>
                    <SelectItem value="Fullstack">Fullstack development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" name="message" placeholder="Type your message here..." value={formData.message} onChange={handleChange} />
              <Button size="md" className="max-w-40" type="submit">Send Message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {alertInfo.show && <Alert message={alertInfo.message} onClose={closeAlert} />}
    </motion.section>
  );
};

export default Contact;