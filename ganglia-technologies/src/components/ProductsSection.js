import React from 'react';
import '../styles/ProductsSection.css';

const ProductsSection = () => {
  const products = [
    {
      id: 'anushtaan',
      title: 'Anushtaan',
      subtitle: 'Data-driven Project Management Tool',
      category: 'dark',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAuMSIgcng9IjgiLz4KPHN2ZyB4PSI1MCIgeT0iMzAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAxMDAgNjAiIGZpbGw9Im5vbmUiPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSI4IiBmaWxsPSIjM0I4MkY2Ii8+CjxyZWN0IHg9IjM1IiB5PSIxNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwIiByeD0iMiIgZmlsbD0iIzNCODJGNiIvPgo8cmVjdCB4PSIzNSIgeT0iMzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSI2IiByeD0iMiIgZmlsbD0iIzk0QTNCOCIvPgo8L3N2Zz4KPC9zdmc+',
      isAvailable: true
    },
    {
      id: 'tripmachaai',
      title: 'TripMachaAI',
      subtitle: 'AI-powered short distance travel planner',
      category: 'blue',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAuMSIgcng9IjgiLz4KPHN2ZyB4PSI2MCIgeT0iMzAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDgwIDYwIiBmaWxsPSJub25lIj4KPHBhdGggZD0ibTQwIDEwIDEwIDEwSDE1TDQwIDEwWiIgZmlsbD0iI0ZGRiIvPgo8Y2lyY2xlIGN4PSI0MCIgY3k9IjQ1IiByPSI4IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4KPC9zdmc+',
      isAvailable: true
    },
    {
      id: 'medical-log-book',
      title: 'Medical Log Book',
      subtitle: 'AI-powered clinical reporting and evaluation platform',
      category: 'blue',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAuMSIgcng9IjgiLz4KPHN2ZyB4PSI2MCIgeT0iMjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIiBmaWxsPSJub25lIj4KPHJlY3QgeD0iMTUiIHk9IjEwIiB3aWR0aD0iNTAiIGhlaWdodD0iNjAiIHJ4PSI0IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8bGluZSB4MT0iMjUiIHkxPSIyNSIgeDI9IjU1IiB5Mj0iMjUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxsaW5lIHgxPSIyNSIgeTE9IjM1IiB4Mj0iNTUiIHkyPSIzNSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIiLz4KPGxpbmUgeDE9IjI1IiB5MT0iNDUiIHgyPSI0NSIgeTI9IjQ1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4KPC9zdmc+',
      isAvailable: true
    },
    {
      id: 'smart-laryngoscope',
      title: 'Smart Video',
      subtitle: 'Laryngoscope',
      category: 'dark',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAuMSIgcng9IjgiLz4KPHN2ZyB4PSI3MCIgeT0iMzAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIiBmaWxsPSJub25lIj4KPGVsbGlwc2UgY3g9IjMwIiBjeT0iNDAiIHJ4PSIyMCIgcnk9IjE1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8bGluZSB4MT0iMzAiIHkxPSIxMCIgeDI9IjMwIiB5Mj0iMjUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo8L3N2Zz4=',
      isAvailable: true
    },
    {
      id: 'medical-drone',
      title: 'Medical Drone',
      subtitle: '',
      category: 'blue',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAuMSIgcng9IjgiLz4KPHN2ZyB4PSI3MCIgeT0iMzAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIiBmaWxsPSJub25lIj4KPHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSIyIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSI2IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSI0NSIgY3k9IjE1IiByPSI2IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjQ1IiByPSI2IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSI0NSIgY3k9IjQ1IiByPSI2IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4KPC9zdmc+',
      isAvailable: false
    },
    {
      id: 'mobile-icu',
      title: 'Mobile ICU',
      subtitle: 'UNLOCKING SOON!',
      category: 'dark',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAuMSIgcng9IjgiLz4KPHN2ZyB4PSI2MCIgeT0iMzAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDgwIDYwIiBmaWxsPSJub25lIj4KPHJlY3QgeD0iMTAiIHk9IjIwIiB3aWR0aD0iNjAiIGhlaWdodD0iMzAiIHJ4PSI0IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjU1IiByPSI1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSI2MCIgY3k9IjU1IiByPSI1IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4KPC9zdmc+',
      isAvailable: false
    },
    {
      id: 'thermal-imaging',
      title: 'Thermal-Imaging',
      subtitle: 'System',
      category: 'blue',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAuMSIgcng9IjgiLz4KPHN2ZyB4PSI3MCIgeT0iMzAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIiBmaWxsPSJub25lIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjAiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+CjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEwIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI1IiBmaWxsPSIjRkZGIi8+Cjwvc3ZnPgo8L3N2Zz4=',
      isAvailable: false
    }
  ];

  return (
    <section className="products-section" id="products">
      <div className="products-background">
        <div className="products-gradient-text">Products</div>
        
        <div className="products-container">
          <h2 className="products-title">Our Valuable Products</h2>
          
          <div className="products-grid">
            {products.map((product) => (
              <div 
                key={product.id}
                className={`product-card ${product.category} ${!product.isAvailable ? 'coming-soon' : ''}`}
              >
                <div className="product-content">
                  <div className="product-header">
                    <h3 className="product-title">
                      {product.title}
                    </h3>
                    {product.subtitle && (
                      <p className="product-subtitle">
                        {product.subtitle}
                      </p>
                    )}
                  </div>
                  
                  <div className="product-image-container">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="product-image"
                    />
                    {!product.isAvailable && (
                      <div className="coming-soon-overlay">
                        <span className="coming-soon-text">UNLOCKING SOON!</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;