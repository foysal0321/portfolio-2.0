/* eslint-disable react/no-unescaped-entities */
import ContactForm from "./ContactForm";
import { contactsData } from "./ContactsData";

function Contact() {

  return (
    <div className="py-16 bg-slate-50" id="Contact">
    <div className=" md:p-14 p-6  h-[90vh]" >
      <h1 className="text-4xl font-semibold py-2">Contact </h1>
      <h3 className="text-xl mt-8 py-2 font-semibold">Don't be shy!</h3>
      <p className="text-gray-600  ">
        If you have a project in mind or would like to make an enquiry simply
        select one <br /> of the following options.
      </p>
      <div className="mt-16">
        {contactsData.map((data, idx) => (
          <div key={idx} className="flex items-center mt-10">
            <div className="avatar ">
              <div className={`w-16 rounded-full ${data.color}`}>
                <img className="size-4" src={data.logo} />
              </div>
            </div>
            <label
            htmlFor="my_modal_6"
              className="btn  ml-6 font-semibold "
              
            >
              {data.name}
            </label>
           
          
          </div>
        ))}
      </div>
      <ContactForm />
    </div>
    </div>
  );
}

export default Contact;
