
import useManageContest from '../../../Hooks/useManageContest';
import WinnerCard from './WinnerCard';

const Winner = () => {
    const [arts] = useManageContest()
    return (
        <div>
            <div>

            </div>
            <div className='grid grid-cols-3 gap-3'>


                {
                    arts.filter(art => art.role).map(winner => <WinnerCard key={winner._id} winner={winner}></WinnerCard>)
                }
            </div>


        </div>
    );
};

export default Winner;