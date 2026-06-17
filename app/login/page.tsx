export default function Login () {
    return (
        <div className="auth-page">
         <form className="auth-card">
           
           <h1>สมัครสมาชิก</h1>
          
           <input placeholder="email" type="@email"/>
           <input placeholder="password" type="password"/>

           <button> Login </button>
           </form>
        </div>
    );
}
