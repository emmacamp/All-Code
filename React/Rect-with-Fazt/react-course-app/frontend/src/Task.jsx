import task from './task.css';

export function TaskCard({ ready, title = "no title", user = "User" }) {
  console.log(title, user)

  return (
    <div className="card">
      <h1>{title}</h1>
      <div className='footer-card'>
        <span className={ready ? 'ready' : 'no-ready'}>
          {
            ready ? 'Ready' : 'Not Ready'
          }
        </span>
        <span className='user'>
          {user}
        </span>

      </div>
    </div>
  );
}
