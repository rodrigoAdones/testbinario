import transform from '../src/index';

describe('Validate function', () => {
     
    it('should support null parameter', () => {
        expect(transform.toDecimal(null)).toBe(0);
    });
  
  });

