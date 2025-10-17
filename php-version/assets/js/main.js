/**
 * MetaEsthAI PHP Version - Main JavaScript
 * Handles chat functionality, language switching, and UI interactions
 */

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Preline components
  if (typeof HSStaticMethods !== "undefined") {
    HSStaticMethods.autoInit();
  }

  // Initialize chat functionality
  initializeChat();

  // Initialize language switcher
  initializeLanguageSwitcher();

  // Initialize smooth scrolling
  initializeSmoothScrolling();

  // Initialize animations
  initializeAnimations();
});

/**
 * Chat functionality
 */
function initializeChat() {
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");

  if (!chatInput || !chatMessages) return;

  // Send message on Enter key
  chatInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Auto-resize textarea
  chatInput.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();

  if (!message) return;

  // Add user message to chat
  addMessage(message, "user");
  input.value = "";
  input.style.height = "auto";

  // Show loading indicator
  showLoadingIndicator();

  // Send to API
  fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: JSON.stringify({
      message: message,
      language: getCurrentLanguage(),
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      hideLoadingIndicator();
      addMessage(data.response, "ai");
    })
    .catch((error) => {
      hideLoadingIndicator();
      addMessage("Sorry, I encountered an error. Please try again.", "ai");
      console.error("Error:", error);
    });
}

function addMessage(text, sender) {
  const messagesContainer = document.getElementById("chat-messages");
  const messageDiv = document.createElement("div");

  messageDiv.className = "chat-message flex items-start space-x-3 mb-4";

  if (sender === "user") {
    messageDiv.innerHTML = `
            <div class="flex-1"></div>
            <div class="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg p-3 max-w-xs ml-auto">
                <p class="text-sm">${escapeHtml(text)}</p>
            </div>
            <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
            </div>
        `;
  } else {
    messageDiv.innerHTML = `
            <div class="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            </div>
            <div class="bg-gray-100 rounded-lg p-3 max-w-xs">
                <p class="text-sm text-gray-800">${formatMessage(text)}</p>
            </div>
        `;
  }

  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showLoadingIndicator() {
  const messagesContainer = document.getElementById("chat-messages");
  const loadingDiv = document.createElement("div");
  loadingDiv.id = "loading-indicator";
  loadingDiv.className = "flex items-start space-x-3 mb-4";
  loadingDiv.innerHTML = `
        <div class="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        </div>
        <div class="bg-gray-100 rounded-lg p-3">
            <div class="flex space-x-1">
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            </div>
        </div>
    `;

  messagesContainer.appendChild(loadingDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideLoadingIndicator() {
  const loadingIndicator = document.getElementById("loading-indicator");
  if (loadingIndicator) {
    loadingIndicator.remove();
  }
}

/**
 * Language switcher functionality
 */
function initializeLanguageSwitcher() {
  const languageButtons = document.querySelectorAll("[data-language]");

  languageButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const language = this.dataset.language;
      changeLanguage(language);
    });
  });
}

function changeLanguage(language) {
  // Update language in session via API
  fetch("/api/language", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: JSON.stringify({ language: language }),
  })
    .then((response) => {
      if (response.ok) {
        // Reload page to apply new language
        window.location.reload();
      }
    })
    .catch((error) => {
      console.error("Error changing language:", error);
    });
}

function getCurrentLanguage() {
  return document.documentElement.lang || "en";
}

/**
 * Smooth scrolling functionality
 */
function initializeSmoothScrolling() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/**
 * Animation initialization
 */
function initializeAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      }
    });
  }, observerOptions);

  // Observe elements with animation class
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((el) => observer.observe(el));
}

/**
 * Utility functions
 */
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function formatMessage(text) {
  // Convert markdown-style formatting to HTML
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br>")
    .replace(/^(\d+\.\s)/gm, "<strong>$1</strong>");
}

function startChat() {
  const chatContainer = document.getElementById("chat-container");
  if (chatContainer) {
    chatContainer.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const chatInput = document.getElementById("chat-input");
      if (chatInput) {
        chatInput.focus();
      }
    }, 500);
  }
}

/**
 * Form handling
 */
function handleFormSubmission(formId, successCallback) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const submitButton = this.querySelector('button[type="submit"]');

    // Disable submit button
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    fetch(this.action, {
      method: "POST",
      body: formData,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          if (successCallback) {
            successCallback(data);
          }
        } else {
          showNotification("Error: " + (data.message || "Something went wrong"), "error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        showNotification("Network error. Please try again.", "error");
      })
      .finally(() => {
        // Re-enable submit button
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Send";
        }
      });
  });
}

/**
 * Notification system
 */
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
    type === "error"
      ? "bg-red-500 text-white"
      : type === "success"
        ? "bg-green-500 text-white"
        : "bg-blue-500 text-white"
  }`;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

/**
 * Mobile menu handling
 */
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden");
  }
}

/**
 * Search functionality
 */
function initializeSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  let searchTimeout;

  searchInput.addEventListener("input", function () {
    clearTimeout(searchTimeout);
    const query = this.value.trim();

    if (query.length < 2) return;

    searchTimeout = setTimeout(() => {
      performSearch(query);
    }, 300);
  });
}

function performSearch(query) {
  // Implement search functionality
  console.log("Searching for:", query);
}

/**
 * Accessibility improvements
 */
function initializeAccessibility() {
  // Add keyboard navigation for custom elements
  const customButtons = document.querySelectorAll('[role="button"]');

  customButtons.forEach((button) => {
    button.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });
  });

  // Add focus indicators
  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-navigation");
    }
  });

  document.addEventListener("mousedown", function () {
    document.body.classList.remove("keyboard-navigation");
  });
}

// Initialize accessibility on DOM ready
document.addEventListener("DOMContentLoaded", initializeAccessibility);
