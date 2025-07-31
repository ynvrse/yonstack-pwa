import { title } from '@/config';

// this utility is used to welcome users in the console

function welcome() {
    const styles = [
        'font-size: 40px',
        `color: #ffffffff`,
        `border: 1px solid #ffffffff`,
        `background-color: #6aab9e`,
        'border-radius: 5px',
        'padding: 10px',
    ].join(';');

    console.log(`%c=== ${title} ===`, styles);
}

export default welcome;
