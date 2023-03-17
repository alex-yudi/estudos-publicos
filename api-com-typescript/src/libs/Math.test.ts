import { Math } from './Math';

describe('Testing Math library', () => {

    it('should sum two numbers correctly', () => {

        const response = Math.sum(5, 10);
        expect(response).toBe(15);

    });

    it('should subtract two number correctly', () => {

        const response = Math.sub(10, 5);
        expect(response).toBe(5);

    });

    it('should multiply two number correctly', () => {

        const response = Math.mult(3, 5);
        expect(response).toBe(15);

    });

    it('should divide two number correctly', () => {

        const response = Math.div(15, 3);
        expect(response).toBe(5);

        const response2 = Math.div(3, 0);
        expect(response2).toBe('Não é possível fazer essa divisão');
    });
})

