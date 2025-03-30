
<div class="auth-container">
    <div class="auth-card">
        <h1 class="auth-title">Register</h1>
        
        <?php
        // Check if there's an error message to display
        if (isset($_GET['error'])) {
            $error = htmlspecialchars($_GET['error']);
            echo '<div class="auth-error">' . $error . '</div>';
        }
        ?>
        
        <form class="auth-form" action="index.php?page=register" method="POST">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            
            <div class="form-group">
                <label for="confirm_password">Confirm Password</label>
                <input type="password" id="confirm_password" name="confirm_password" required>
            </div>
            
            <div class="form-group terms-group">
                <label class="checkbox-container">
                    <input type="checkbox" name="terms" id="terms" required>
                    <span class="checkmark"></span>
                    I agree to the <a href="index.php?page=terms" class="terms-link">Terms of Service</a> and <a href="index.php?page=privacy" class="terms-link">Privacy Policy</a>
                </label>
            </div>
            
            <button type="submit" class="auth-button">Register</button>
        </form>
        
        <div class="auth-footer">
            Already have an account? <a href="index.php?page=login">Login</a>
        </div>
    </div>
</div>
