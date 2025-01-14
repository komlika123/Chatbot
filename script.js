
        class CDPChatbot {
            constructor() {
                this.currentPlatform = 'all';
                this.chatBox = document.getElementById('chat-box');
                this.userInput = document.getElementById('user-input');
                this.sendButton = document.getElementById('send-btn');
                this.typingIndicator = document.getElementById('typing-indicator');
                this.platformButtons = document.querySelectorAll('.platform-btn');
                
                this.initializeEventListeners();
            }

            initializeEventListeners() {
                this.sendButton.addEventListener('click', () => this.handleUserInput());
                this.userInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.handleUserInput();
                });

                this.platformButtons.forEach(btn => {
                    btn.addEventListener('click', (e) => this.handlePlatformChange(e));
                });
            }

            handlePlatformChange(e) {
                this.platformButtons.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                this.currentPlatform = e.target.dataset.platform;
            }

            async handleUserInput() {
                const message = this.userInput.value.trim();
                if (!message) return;

                this.addMessage(message, 'user');
                this.userInput.value = '';
                this.showTypingIndicator();

                try {
                    const response = await this.processQuestion(message);
                    this.hideTypingIndicator();
                    this.addMessage(response, 'bot');
                } catch (error) {
                    this.hideTypingIndicator();
                    this.addMessage('Sorry, I encountered an error. Please try again.', 'bot');
                }
            }

            showTypingIndicator() {
                this.typingIndicator.style.display = 'block';
            }

            hideTypingIndicator() {
                this.typingIndicator.style.display = 'none';
            }

            addMessage(text, sender) {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message', `${sender}-message`);
                
                if (sender === 'bot' && text.includes('Steps:')) {
                    const [intro, steps] = text.split('Steps:');
                    messageDiv.innerHTML = intro;
                    
                    const stepsList = document.createElement('ol');
                    stepsList.classList.add('steps-list');
                    
                    steps.split('\n').filter(step => step.trim()).forEach(step => {
                        const li = document.createElement('li');
                        li.textContent = step.trim();
                        stepsList.appendChild(li);
                    });
                    
                    messageDiv.appendChild(stepsList);
                } else {
                    messageDiv.textContent = text;
                }
                
                this.chatBox.appendChild(messageDiv);
                this.chatBox.scrollTop = this.chatBox.scrollHeight;
            }

            async processQuestion(question) {
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Simple keyword-based response system
                const questionLower = question.toLowerCase();
                
                if (questionLower.includes('compare') || questionLower.includes('difference')) {
                    return this.generateComparisonResponse(questionLower);
                }
                
                if (questionLower.includes('how to') || questionLower.includes('how do i')) {
                    return this.generateHowToResponse(questionLower);
                }
                
                return "I'm not sure how to help with that. Could you please ask a specific 'how-to' question about CDP features?";
            }

            generateHowToResponse(question) {
                // Sample responses based on keywords
                if (question.includes('source') || question.includes('connect')) {
                    return `Here's how to set up a new source: Steps:
                    1. Navigate to the Sources section in your CDP dashboard
                    2. Click on "Add New Source"
                    3. Select your source type from the available options
                    4. Configure the source settings and credentials
                    5. Test the connection
                    6. Save and activate the source`;
                }
                
                if (question.includes('profile') || question.includes('user')) {
                    return `Here's how to create a user profile: Steps:
                    1. Go to the Profiles section
                    2. Click "Create New Profile"
                    3. Define the profile attributes
                    4. Set up identity resolution rules
                    5. Configure profile merging settings
                    6. Save and verify the profile configuration`;
                }
                
                return "I understand you have a how-to question, but I need more specific details about what you'd like to accomplish.";
            }

            generateComparisonResponse(question) {
                if (question.includes('segment') && question.includes('lytics')) {
                    return `Comparing Segment and Lytics audience creation:
                    
                    Segment:
                    - Uses trait-based segmentation
                    - Real-time audience updates
                    - SQL-like syntax for complex queries
                    
                    Lytics:
                    - Behavioral scoring system
                    - Machine learning-powered segmentation
                    - Visual audience builder interface`;
                }
                
                return "I can help compare CDPs, but I need to know which specific platforms and features you'd like to compare.";
            }
        }

        // Initialize the chatbot
        const chatbot = new CDPChatbot();
    