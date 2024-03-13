import Empty from '../../ui/Empty';
import SessionsCard from '../sessions/SessionsCard';

function SessionsTrack({ students_session }) {
  // students_session cacheの取得
  // const queryClient = useQueryClient();
  // const students_session = queryClient.getQueriesData('students_session')[1][1];

  const chestSession = [];
  const shoulderSession = [];
  const backSession = [];
  const legsSession = [];
  const armsSession = [];
  const absSession = [];

  students_session.forEach((session) => {
    switch (session.session.workoutMenu) {
      case 'chest':
        chestSession.push(session.session);
        break;
      case 'shoulder':
        shoulderSession.push(session.session);
        break;
      case 'back':
        backSession.push(session.session);
        break;
      case 'legs':
        legsSession.push(session.session);
        break;
      case 'arms':
        armsSession.push(session.session);
        break;
      case 'abs':
        absSession.push(session.session);
        break;
      default:
        break;
    }
  });

  return (
    <div className="grid grid-cols-3 gap-4">
      {chestSession.length !== 0 && (
        <SessionsCard sessions={chestSession} part={'chest'} key={'chest'} />
      )}
      {shoulderSession.length !== 0 && (
        <SessionsCard
          sessions={shoulderSession}
          part={'shoulder'}
          key={'shoulder'}
        />
      )}
      {backSession.length !== 0 && (
        <SessionsCard sessions={backSession} part={'back'} key={'back'} />
      )}
      {legsSession.length !== 0 && (
        <SessionsCard sessions={legsSession} part={'legs'} key={'legs'} />
      )}
      {armsSession.length !== 0 && (
        <SessionsCard sessions={armsSession} part={'arms'} key={'arms'} />
      )}
      {absSession.length !== 0 && (
        <SessionsCard sessions={absSession} part={'abs'} key={'abs'} />
      )}
      {!students_session.length && <Empty resourceName={'Student tracks'} />}
    </div>
  );
}

export default SessionsTrack;
