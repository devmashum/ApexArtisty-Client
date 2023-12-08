import error from '../../assets/Error/error.png'
const ErrorPage = () => {
    return (
        <div className='w-10/12 mx-auto min-h-screen pt-10'>
      <div>  <img className='w-[200px] h-[200px] mx-auto' src={error} alt="" /></div>
            <h1 className='mt-5 text-red-700 text-center'>It's an Error! If you face any data load related error, Please reload me 2/3 times to solve the problem.</h1>
<div className='flex gap-5 w-full justify-center'>
<a className='btn btn-sm bg-[#080a0a] text-white' href="/">Back to Home</a>
           
</div>
        </div>
    );
};

export default ErrorPage;