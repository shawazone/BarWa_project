import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
interface FormValues {
  productName: string;
  description: string;
  price: number;
  imageUrl: string;
}

const TestingProductAdding  = () => {
  const initialValues: FormValues = {
    productName: '',
    description: '',
    price: 0,
    imageUrl: ''
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required('Product Name is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    imageUrl: Yup.string().url('Invalid URL')
  });

  const handleSubmit = (values: FormValues) => {
    // Handle form submission
    console.log(values);
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
              <label htmlFor='productName'>Product Name:</label>
              <Field
                type='text'
                name='productName'
                className='border border-gray-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-gray-100'
              />
              <ErrorMessage name='productName' component='div' className='text-red-500' />
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
              <label htmlFor='imageUrl'>Image URL:</label>
              <Field
                type='text'
                name='imageUrl'
                className='border border-gray-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-gray-100'
              />
              <ErrorMessage name='imageUrl' component='div' className='text-red-500' />
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
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default TestingProductAdding;
