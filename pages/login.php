
<div class="auth-container">
    <div class="auth-card">
        <h1 class="auth-title">Login</h1>
        
        <?php
        // Check if there's an error message to display
        if (isset($_GET['error'])) {
            $error = htmlspecialchars($_GET['error']);
            echo '<div class="auth-error">' . $error . '</div>';
        }
        
        // Check if there's a success message to display
        if (isset($_GET['success'])) {
            $success = htmlspecialchars($_GET['success']);
            echo '<div class="auth-success">' . $success . '</div>';
        }
        ?>
        
        <form class="auth-form" action="index.php?page=login" method="POST">
            <div class="form-group">
                <label for="username">Username or Email</label>
                <input type="text" id="username" name="username" required>
            </div>
            
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            
            <div class="form-group remember-group">
                <label class="checkbox-container">
                    <input type="checkbox" name="remember" id="remember">
                    <span class="checkmark"></span>
                    Remember me
                </label>
                <a href="index.php?page=forgot-password" class="forgot-link">Forgot Password?</a>
            </div>
            
            <button type="submit" class="auth-button">Login</button>
        </form>
        
        <div class="auth-footer">
            Don't have an account? <a href="index.php?page=register">Register</a>
        </div>
    </div>
</div>
