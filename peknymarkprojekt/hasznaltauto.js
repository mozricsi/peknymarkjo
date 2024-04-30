function filterCars(filter) {
    const cars = document.querySelectorAll('.car');
    
    cars.forEach(car => {
      const type = car.getAttribute('data-type');
      const price = parseInt(car.getAttribute('data-price'));
      const mileage = parseInt(car.getAttribute('data-mileage'));
      
      if (filter === 'all' || type === filter) {
        car.style.display = 'block';
      } else {
        car.style.display = 'none';
      }
    });
  }

  