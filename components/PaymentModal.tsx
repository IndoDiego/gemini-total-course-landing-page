import React, { useState, useEffect } from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  price: number;
  userEmail?: string;
  userName?: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, price, userEmail, userName }) => {
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'card'>('paypal');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: userName || '',
  });

  const IBAN = 'ES29 1583 0001 1590 1607 4430';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayPalPayment = () => {
    setIsProcessing(true);
    // Simulate PayPal payment processing
    setTimeout(() => {
      alert(`¡Pago con PayPal exitoso! Se ha enviado un email de confirmación a ${userEmail || 'tu correo'}.`);
      setIsProcessing(false);
      onClose();
    }, 2000);
  };

  const handleCardPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate card payment processing
    setTimeout(() => {
      alert(`¡Pago con tarjeta exitoso! Se ha enviado un email de confirmación a ${userEmail || 'tu correo'}.`);
      setIsProcessing(false);
      onClose();
    }, 2000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-[100]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-modal-title"
      onClick={onClose}
    >
      <div 
        className="bg-white p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md m-4 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 id="payment-modal-title" className="text-2xl font-bold text-gray-900">Completar Pago</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
            aria-label="Cerrar modal"
            disabled={isProcessing}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Payment Summary */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Resumen del pedido</h3>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Curso Gemini Total</span>
            <span className="font-semibold text-gray-900">€{price}</span>
          </div>
          <div className="border-t border-gray-200 mt-2 pt-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="font-bold text-xl text-blue-600">€{price}</span>
            </div>
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Método de pago</h3>
          <div className="space-y-3">
            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={() => setPaymentMethod('paypal')}
                className="mr-3"
                disabled={isProcessing}
              />
              <div className="flex items-center">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24">
                  <path fill="#003087" d="M20.067 8.478c.492 0 .924.09 1.296.27.372.18.696.432.972.756.276.324.492.708.648 1.152.156.444.264.924.324 1.44.06.516.096 1.08.108 1.692.012.612.012 1.284 0 2.016-.012.732-.048 1.44-.108 2.124-.06.684-.168 1.32-.324 1.908-.156.588-.372 1.116-.648 1.584-.276.468-.6.864-.972 1.188-.372.324-.804.576-1.296.756-.492.18-1.032.27-1.62.27H12.5l-1.5-9h8.067z"/>
                  <path fill="#009cde" d="M12.5 20.5H8.5l1.5-9h2.5l-1.5 9z"/>
                </svg>
                <span className="font-medium">PayPal</span>
              </div>
            </label>
            
            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className="mr-3"
                disabled={isProcessing}
              />
              <div className="flex items-center">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24">
                  <rect width="24" height="16" rx="2" fill="#1a1a1a"/>
                  <rect x="2" y="4" width="20" height="8" rx="1" fill="#f0f0f0"/>
                  <circle cx="6" cy="8" r="2" fill="#1a1a1a"/>
                  <rect x="12" y="6" width="8" height="4" rx="1" fill="#1a1a1a"/>
                </svg>
                <span className="font-medium">Tarjeta de crédito/débito</span>
              </div>
            </label>
          </div>
        </div>

        {/* Payment Forms */}
        {paymentMethod === 'paypal' && (
          <div className="mb-6">
            <button
              onClick={handlePayPalPayment}
              disabled={isProcessing}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20.067 8.478c.492 0 .924.09 1.296.27.372.18.696.432.972.756.276.324.492.708.648 1.152.156.444.264.924.324 1.44.06.516.096 1.08.108 1.692.012.612.012 1.284 0 2.016-.012.732-.048 1.44-.108 2.124-.06.684-.168 1.32-.324 1.908-.156.588-.372 1.116-.648 1.584-.276.468-.6.864-.972 1.188-.372.324-.804.576-1.296.756-.492.18-1.032.27-1.62.27H12.5l-1.5-9h8.067z"/>
                    <path fill="currentColor" d="M12.5 20.5H8.5l1.5-9h2.5l-1.5 9z"/>
                  </svg>
                  Pagar con PayPal €{price}
                </>
              )}
            </button>
          </div>
        )}

        {paymentMethod === 'card' && (
          <form onSubmit={handleCardPayment} className="space-y-4 mb-6">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Número de tarjeta</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                value={cardData.cardNumber}
                onChange={(e) => setCardData(prev => ({ ...prev, cardNumber: formatCardNumber(e.target.value) }))}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                disabled={isProcessing}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">Fecha de vencimiento</label>
                <input
                  type="text"
                  name="expiryDate"
                  id="expiryDate"
                  value={cardData.expiryDate}
                  onChange={(e) => setCardData(prev => ({ ...prev, expiryDate: formatExpiryDate(e.target.value) }))}
                  placeholder="MM/AA"
                  maxLength={5}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  disabled={isProcessing}
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  value={cardData.cvv}
                  onChange={handleCardChange}
                  placeholder="123"
                  maxLength={4}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  disabled={isProcessing}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700 mb-1">Nombre del titular</label>
              <input
                type="text"
                name="cardholderName"
                id="cardholderName"
                value={cardData.cardholderName}
                onChange={handleCardChange}
                placeholder="Nombre como aparece en la tarjeta"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                disabled={isProcessing}
              />
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando pago...
                </>
              ) : (
                `Pagar €${price} con tarjeta`
              )}
            </button>
          </form>
        )}

        {/* Bank Transfer Info */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">Transferencia bancaria</h4>
          <p className="text-sm text-blue-800 mb-2">Si prefieres pagar por transferencia bancaria:</p>
          <div className="bg-white p-3 rounded border">
            <p className="text-sm font-mono text-gray-700">IBAN: {IBAN}</p>
            <p className="text-xs text-gray-600 mt-1">Concepto: Gemini Total - {userName || 'Tu nombre'}</p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Tus datos están protegidos con encriptación SSL. Los pagos son procesados de forma segura.
        </p>
      </div>
    </div>
  );
};

export default PaymentModal; 