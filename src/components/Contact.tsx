
import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState('native'); // 'native' or 'google'
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const submitToGoogleForm = async (data: typeof formData) => {
    // This is the Google Form submission URL - in production, this should be handled by a server-side function
    // Replace 'YOUR_FORM_ID' with the actual Google Form ID from the form URL
    // The entry.XXXX values should match your Google Form field IDs
    const formUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
    
    // Create URL search params to mimic form submission
    const formParams = new URLSearchParams({
      'entry.123456789': data.name, // Replace with your actual form entry IDs
      'entry.234567890': data.email,
      'entry.345678901': data.phone,
      'entry.456789012': data.subject,
      'entry.567890123': data.message,
      'submit': 'Submit'
    });
    
    try {
      // Note: Direct CORS issues will prevent this from working client-side in production
      // This is a temporary solution that may not work well due to CORS restrictions
      // A proper implementation would use a server-side function (e.g., Supabase Edge Function)
      const response = await fetch(`${formUrl}?${formParams.toString()}`, {
        method: 'GET',
        mode: 'no-cors', // This is needed but will prevent you from seeing response status
      });
      
      console.log('Form submitted to Google');
      return true;
    } catch (error) {
      console.error('Error submitting to Google Form:', error);
      return false;
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to your server
      console.log('Form submitted:', formData);
      
      // Attempt to submit to Google Form (note: likely to hit CORS issues)
      await submitToGoogleForm(formData);
      
      toast.success("Thank you for your message. We'll get back to you soon!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("There was a problem submitting your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Contact <span className="text-fa-blue">Us</span></h2>
          <div className="w-20 h-1 bg-fa-blue mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to enroll? Reach out to us through any of the following channels, and we'll get back to you promptly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <MapPin className="text-fa-blue h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-700">123 Education Lane, Knowledge Park, Lucknow, Uttar Pradesh, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Phone className="text-fa-blue h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-700">+91 98765 43210</p>
                    <p className="text-gray-700">+91 91234 56789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Mail className="text-fa-blue h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-700">info@fastestacademy.com</p>
                    <p className="text-gray-700">admissions@fastestacademy.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span className="text-gray-700">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span className="text-gray-700">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span className="text-gray-700">Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Contact Form</CardTitle>
                <CardDescription>
                  <div className="flex space-x-4 mb-2">
                    <button 
                      onClick={() => setShowForm('native')}
                      className={`px-4 py-2 rounded-md ${showForm === 'native' 
                        ? 'bg-fa-blue text-white' 
                        : 'bg-gray-100 hover:bg-gray-200'}`}
                    >
                      Quick Form
                    </button>
                    <button 
                      onClick={() => setShowForm('google')}
                      className={`px-4 py-2 rounded-md ${showForm === 'google' 
                        ? 'bg-fa-blue text-white' 
                        : 'bg-gray-100 hover:bg-gray-200'}`}
                    >
                      Full Form
                    </button>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showForm === 'native' ? (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your Phone"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows={4}
                        required
                      />
                    </div>
                    
                    <Button 
                      className="bg-fa-blue hover:bg-fa-light-blue text-white w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <div className="w-full overflow-hidden rounded-md">
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdrA6fL9cQxRpMTfJemD_Mk-5fkYr2NZXRaDqbZm44nT5GwcQ/viewform?embedded=true" 
                      width="100%" 
                      height="650" 
                      style={{ border: 0 }}
                      title="Contact Form"
                    >
                      Loading...
                    </iframe>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="h-[400px] w-full rounded-lg shadow-md overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99974346667!2d80.80242447325662!3d26.848929336503125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1682583980322!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Fastest Academy Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
