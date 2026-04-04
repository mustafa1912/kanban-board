import { useFormStatus } from 'react-dom';
import Button from 'react-bootstrap/Button';

function SubmitButton({ isEdit }) {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            style={{
                background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                border: 'none',
                boxShadow: '0 4px 12px rgba(99,122,241,.3)',
            }}
        >
            {pending ? 'Saving...' : isEdit ? 'Save Changes' : 'Add Task'}
        </Button>
    );
}

export default SubmitButton;