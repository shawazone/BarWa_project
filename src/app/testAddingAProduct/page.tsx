'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

// const {data: session}= useSession();


interface FormValues {
  name: string;
  description: string;
  price: number;
  image: string;

}

const TestingProductAdding  = () => {
  const {data: session}= useSession();
  const userId = session?.user?.email; // Assuming session.user.id is accessible here
  const userNamu = session?.user?.name;

  
  const initialValues: FormValues = {
    name: '',
    description: '',
    price: 0,
    image: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Product Name is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    image: Yup.string().url('Invalid URL')
  });

  const handleSubmit = (values: FormValues) => {
    fetch('http://localhost:3000/api/product', {
    method: 'POST',
        body: JSON.stringify(values),
       headers : {
         'Content-type':'application/json',
       }, 
    }).then(response => {
      window.location.href = "/productsPage";
    });
  };

  return (
    <div className='flex justify-center h-screen py-4 border'>
    
      <div className='border-gray-900 shadow-md p-5'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className='flex gap-2 flex-col'>
            <div className='flex flex-col gap-3'>
              <label htmlFor='name'>Product Name:</label>
              <Field
                type='text'
                name='name'
                className='border border-gray-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-gray-100'
              />
              <ErrorMessage name='name' component='div' className='text-red-500' />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='description'>Description:</label>
              <Field
                type='text'
                name='description'
                className='border border-gray-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-gray-100'
              />
              <ErrorMessage name='description' component='div' className='text-red-500' />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='price'>Price:</label>
              <Field
                type='number'
                name='price'
                className='border border-gray-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-gray-100'
              />
              <ErrorMessage name='price' component='div' className='text-red-500' />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='image'>Image URL:</label>
              <Field
                type='text'
                name='image'
                className='border border-gray-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-gray-100'
              />
              <ErrorMessage name='image' component='div' className='text-red-500' />
              <div className='flex gap-1 justify-start'>
                <Link
                  href='..'
                  className='border border-gray-300 text-gray-300 px-2 py-1 rounded hover:bg-gray-700 focus-within:bg-gray-700 outline-none'
                >
                  Cancel
                </Link>
                <button
                  type='submit'
                  className='border border-gray-300 text-gray-300 px-2 py-1 rounded hover:bg-gray-700 focus-within:bg-gray-700 outline-none'
                >
                  Add
                  </button>

                  <button onClick={() => console.log(userId,userNamu)}
                  className='border border-gray-300 text-gray-300 px-2 py-1 rounded hover:bg-gray-700 focus-within:bg-gray-700 outline-none'
                  >Click me</button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default TestingProductAdding;
