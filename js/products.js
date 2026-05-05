const PRODUCTS_DB = {
  parts: {
    categoryTitle: 'Parts & Components',
    productTypes: [
      {
        typeId: 'xray-grids',
        typeTitle: 'Aluminum Interspaced X-Ray Grids',
        typeImage: 'assets/images/grids.png',
        typeDescription: 'High-precision aluminum interspaced grids for scatter radiation reduction in diagnostic imaging.',
        typeTag: 'GRIDS',
        products: [
          {
            productId: 'standard-grids',
            productTitle: 'Standard X-Ray Grids',
            productImage: 'assets/images/grids.png',
            productDescription: 'Precision-engineered X-ray grids for general radiography applications. Our standard X-ray grids are designed for use in conventional radiography systems. They effectively reduce scattered radiation and improve image contrast, making them ideal for general skeletal and soft tissue imaging. Available in multiple sizes and ratios to accommodate various X-ray equipment configurations. All grids are manufactured with high-precision lead strips and inter-space material for optimal performance and longevity.',
            productFeatures: ['Multiple ratio options: 5:1, 8:1, 12:1, 16:1', 'Lead strip thickness: 0.075mm', 'Interspace material: Aluminum or Carbon Fiber', 'Available sizes: 10"x12", 14"x17", 14"x51", 17"x17"', 'Focused and linear configurations', 'SID compatibility range: 36" to 72"', 'Constructed for both mobile and stationary systems'],
            variations: [
              { variationLabel: 'G101 - 10x12"', sku: 'G101', price: 1200 },
              { variationLabel: 'G102 - 14x17"', sku: 'G102', price: 1350 },
              { variationLabel: 'G103 - 17x17"', sku: 'G103', price: 1450 }
            ]
          },
          {
            productId: 'ultra-high-line-grids',
            productTitle: 'Ultra-High Line X-Ray Grids for Digital CR and DR Applications',
            productImage: 'assets/images/grids.png',
            productDescription: 'Advanced high-resolution grids optimized for digital imaging systems. Engineered specifically for Computed Radiography (CR) and Digital Radiography (DR) applications, these ultra-high line grids deliver exceptional image quality with minimal artifacts. The fine lead strip design reduces visual noise while maintaining compatibility with modern flat-panel detectors. Ideal for high-volume diagnostic centers requiring consistent image quality across multiple examinations.',
            productFeatures: ['Ultra-high line density: 16:1, 18:1, 20:1 ratios', 'Lead strip thickness: 0.06mm for reduced scatter', 'Optimized for CR/DR imaging systems', 'Available sizes: 10"x12", 14"x17", 14"x51", 17"x17"', 'Minimal artifact generation with digital sensors', 'Enhanced contrast resolution for diagnostic imaging', 'SID range: 40" to 76"'],
            variations: [
              { variationLabel: 'G205 - 10x12"', sku: 'G205', price: 1850 },
              { variationLabel: 'G206 - 14x17"', sku: 'G206', price: 1980 },
              { variationLabel: 'G207 - 17x17"', sku: 'G207', price: 2100 }
            ]
          },
          {
            productId: 'flat-grid-encasement',
            productTitle: 'Optional Flat Grid Encasement without Flange',
            productImage: 'assets/images/grids.png',
            productDescription: 'Specialized flat encasement option for custom installations. This optional flat grid encasement provides a sleek, integrated appearance for installations where a traditional flanged housing is not suitable. Designed for seamless integration with specialized X-ray equipment configurations and table-mounted systems. The flat design minimizes additional height and weight while maintaining full protection for the X-ray grid.',
            productFeatures: ['Flush flat design without external flanges', 'Compatible with all standard grid ratios', 'Custom sizing available upon request', 'Durable composite material construction', 'Low-profile installation footprint', 'Easy maintenance and grid replacement', 'Lightweight for portable systems'],
            variations: [
              { variationLabel: 'G301 - Small', sku: 'G301', price: 450 },
              { variationLabel: 'G302 - Medium', sku: 'G302', price: 520 },
              { variationLabel: 'G303 - Large', sku: 'G303', price: 590 }
            ]
          },
          {
            productId: 'drop-on-grid-encasement',
            productTitle: 'Optional Drop-On Grid Encasement',
            productImage: 'assets/images/grids.png',
            productDescription: 'Quick-change encasement for rapid grid deployment. The drop-on encasement system enables rapid grid installation and removal without tools or complex adjustment. Perfect for facilities requiring frequent grid changes or equipment versatility. The secure locking mechanism ensures stable positioning during use. Designed for high-throughput diagnostic centers where efficiency and reliability are paramount.',
            productFeatures: ['Tool-free installation and removal', 'Secure locking mechanism with positive stop', 'Compatible with table and wall mounts', 'Suitable for all standard grid ratios', 'Reinforced mounting points', 'Quick-release latches for rapid changes', 'Durable aluminum and composite construction'],
            variations: [
              { variationLabel: 'G405 - Standard', sku: 'G405', price: 650 },
              { variationLabel: 'G406 - Reinforced', sku: 'G406', price: 725 },
              { variationLabel: 'G407 - Heavy Duty', sku: 'G407', price: 820 }
            ]
          }
        ]
      },
      {
        typeId: 'collimator',
        typeTitle: 'Collimators',
        typeImage: 'assets/images/collimators.png',
        typeDescription: 'X-Ray beam limiting collimators for precise field control during radiographic procedures.',
        typeTag: 'Collimators',
        products: [
          {
            productId: 'manual-collimator',
            productTitle: 'Manual Collimator - Multi-layer, Square field',
            productImage: 'assets/images/collimators.png',
            productDescription: 'Ralco\'s Multi-layer, square field, manual collimator. With a lightweight and compact design this collimator is intended for installation on both mobile and stationary X-ray equipment. This device has been designed and manufactured for skeletal investigations and ER applications. The X-ray field is defined by six pairs of shutters, four of which are lead-lined.',
            productFeatures: ['Projection Lamp: White LED', 'Single Layer Square Adjustable Field: 0x0cm to 48x48cm at 100cm SID', 'Mounting Plane at 80 mm from the focus', 'Continuous Film Coverage from Min: 00 x 00 cm to Max: 48 x 48 cm', 'Minimum Inherent Filtration: 2mm/Al equivalent', 'Accessory Guides for accessories and additional filtration', 'Retractable Tape mounted on the side for measuring SID distance'],
            variations: [
              { variationLabel: 'R221 - 48x48cm', sku: 'R221', price: 2300 },
              { variationLabel: 'R222 - 36x36cm', sku: 'R222', price: 2175 },
              { variationLabel: 'R223 - 24x24cm', sku: 'R223', price: 2050 }
            ]
          }
        ]
      }
    ]
  },

  equipment: {
    categoryTitle: 'Equipment',
    productTypes: [
      { typeId: 'darkroom-equip', typeTitle: 'Darkroom Equipment', typeImage: 'assets/images/darkroom.png', typeDescription: 'Specialized tools and accessories for film handling and processing in medical or laboratory environments.', typeTag: 'Darkroom', products: [] },
      { typeId: 'examroom-equip', typeTitle: 'Exam Room Equipment', typeImage: 'assets/images/examroom.png', typeDescription: 'Essential furnishings and tools for patient examination areas.', typeTag: 'Exam Room', products: [] },
      { typeId: 'patientcare-equip', typeTitle: 'Patient Care Equipment', typeImage: 'assets/images/patientcare.png', typeDescription: 'Equipment for use in general medical facilities for patient care and amenities.', typeTag: 'Patient Care', products: [] }
    ]
  },

  accessories: {
    categoryTitle: 'Accessories',
    productTypes: [
      { typeId: 'aprons', typeTitle: 'Lead Aprons', typeImage: 'assets/images/aprons.png', typeDescription: 'Different styles of aprons in various protection types including Standard Lead, Lightweight Lead, and Lead Free.', typeTag: 'Protective gears', products: [] },
      { typeId: 'gloves', typeTitle: 'Surgical Radiation Reducing Gloves', typeImage: 'assets/images/gloves.png', typeDescription: 'Surgical radiation reducing lead gloves and sleeves.', typeTag: 'Protective gears', products: [] },
      { typeId: 'phantoms', typeTitle: 'Resolution test Tools/Phantoms', typeImage: 'assets/images/phantoms.png', typeDescription: 'Test and Resolutions performance products for various radiology modalities. Useful for Q/A and/or accreditation & compliance testing.', typeTag: 'Testing', products: [] }
    ]
  },

  supplies: {
    categoryTitle: 'Supplies',
    productTypes: [
      { typeId: 'cleaners', typeTitle: 'Screen and Surface Cleaners', typeImage: 'assets/images/cleaners.png', typeDescription: 'Medical grade cleaning supplies—disinfecting sprays, cloths, brushes, and kits.', typeTag: 'Cleaning', products: [] },
      { typeId: 'gowns', typeTitle: 'Exam Gowns/Capes', typeImage: 'assets/images/gowns.png', typeDescription: 'Single use, patient exam capes and gowns.', typeTag: 'Exam Room, Patient Care', products: [] }
    ]
  }
};

window.SEARCH_INDEX = (() => {
  const index = [];
  Object.values(PRODUCTS_DB).forEach(category => {
    (category.productTypes || []).forEach(type => {
      (type.products || []).forEach(product => {
        index.push({
          id: product.productId,
          title: product.productTitle,
          typeId: type.typeId,
          typeTitle: type.typeTitle,
          description: product.productDescription,
          image: product.productImage,
          skus: product.variations.map(v => v.sku)
        });
      });
    });
  });
  return index;
})();

window.PRODUCTS_DB = PRODUCTS_DB;
