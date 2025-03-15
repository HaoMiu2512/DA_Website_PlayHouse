document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchLabel = document.getElementById('searchLabel');
    const trackingForm = document.getElementById('trackingForm');

    // Set initial label and input type for phone number
    searchLabel.textContent = 'Số điện thoại đặt hàng';
    searchInput.placeholder = 'Nhập số điện thoại';
    searchInput.type = 'tel';

    trackingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchValue = searchInput.value;

        // Fetch orders based on phone number
        fetchOrders(searchValue);
    });

    function fetchOrders(searchValue) {
        // Example function to fetch orders by phone number
        // Replace with actual implementation
        console.log(`Fetching orders for: ${searchValue}`);
        
        // Simulate fetching orders
        const orders = [
            { 
                orderId: 'PH-1234', 
                status: 'Đang giao hàng', 
                date: '25/06/2024', 
                name: 'Nguyễn Văn A',
                phone: '1234567890',
                address: '123 Đường ABC, Quận 1, TP.HCM',
                total: '850.000đ'
            },
            { 
                orderId: 'PH-5678', 
                status: 'Đã giao', 
                date: '20/06/2024', 
                name: 'Trần Thị B',
                phone: '0987654321',
                address: '456 Đường XYZ, Quận 2, TP.HCM',
                total: '1.200.000đ'
            }
        ];

        // Filter orders based on search value
        const filteredOrders = orders.filter(order => order.phone === searchValue);

        displayOrders(filteredOrders);
    }

    function displayOrders(orders) {
        const foundResult = document.getElementById('foundResult');
        const notFoundResult = document.getElementById('notFoundResult');

        if (orders.length > 0) {
            // Display found orders
            foundResult.style.display = 'block';
            notFoundResult.style.display = 'none';

            // Populate order details
            foundResult.innerHTML = orders.map(order => `
                <div class="result-header">
                    <h3>Đơn hàng #${order.orderId}</h3>
                    <span class="order-status">${order.status}</span>
                </div>
                <div class="order-info">
                    <div class="info-section">
                        <h4>THÔNG TIN ĐƠN HÀNG</h4>
                        <div class="info-content">
                            <div class="info-item">
                                <span class="info-label">Ngày đặt:</span>
                                <span class="info-value">${order.date}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">Họ tên:</span>
                                <span class="info-value">${order.name}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">Số điện thoại:</span>
                                <span class="info-value">${order.phone}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">Địa chỉ:</span>
                                <span class="info-value">${order.address}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">Tổng tiền:</span>
                                <span class="info-value">${order.total}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        } else {
            // Display not found message
            foundResult.style.display = 'none';
            notFoundResult.style.display = 'block';
        }
    }
});