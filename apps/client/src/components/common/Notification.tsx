
interface NotificationProps {
    type: 'success' | 'error' | 'warning';
    message: string;
    setIsError: (isError: boolean) => void;
    setErrorMessage: (errorMessage: string) => void;
};

export default function Notification(props: NotificationProps) {

    const { type, message, setIsError, setErrorMessage } = props;

    const closeNotification = () => {
        console.log('closeNotification')
        setIsError(false);
        setErrorMessage('');
    };

    const notificationType = () => {
        switch (type) {
            case 'success':
                return 'bg-green-500';
            case 'error':
                return 'bg-red-500';
            case 'warning':
                return 'bg-yellow-500';
            default:
                return 'bg-gray-500';
        }
    };

    const notificationIcon = () => {
        switch (type) {
            case 'success':
                return 'fa-check-circle';
            case 'error':
                return 'fa-exclamation-circle';
            case 'warning':
                return 'fa-exclamation-triangle';
            default:
                return 'fa-info-circle';
        }
    };

    return (
        <div className={`${notificationType()} text-white px-6 py-4 border-0 rounded relative mb-4`}>
            <span className='inline-block align-middle mr-8'>
                <i className={`fas ${notificationIcon()} mr-2`}></i>
                {type.toUpperCase()}: {message}
            </span>
            <button
                className='absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none'
                onClick={closeNotification}
            >
                <span>×</span>
            </button>
        </div>
    );

};
