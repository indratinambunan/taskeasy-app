# TaskEasy - User Stories & Planning

## User Stories (Prioritized)

### Epic 1: Basic Task Management
**Priority: HIGH**

1. **US-001**: Create Task
   - **As a** user
   - **I want to** create a task with title, description, priority, and status
   - **So that** I can track my work items
   - **Story Points**: 3
   - **Acceptance Criteria**:
     - User can input task title (required)
     - User can input task description (optional)
     - User can select priority (low, medium, high)
     - User can set initial status (to-do, in-progress, done)
     - Task is saved and appears in task list

2. **US-002**: View Task List
   - **As a** user
   - **I want to** view all my tasks sorted by priority
   - **So that** I can see what needs to be done first
   - **Story Points**: 2
   - **Acceptance Criteria**:
     - Tasks are displayed in a list format
     - Tasks are sorted by priority (high → medium → low)
     - Each task shows title, description, priority, and status

### Epic 2: Task Management Operations
**Priority: MEDIUM**

3. **US-003**: Update Task
   - **As a** user
   - **I want to** edit existing tasks
   - **So that** I can modify task details or update progress
   - **Story Points**: 3
   - **Acceptance Criteria**:
     - User can click on a task to edit
     - All fields can be modified
     - Changes are saved and reflected in the list

4. **US-004**: Delete Task
   - **As a** user
   - **I want to** delete completed or unnecessary tasks
   - **So that** my task list stays clean and relevant
   - **Story Points**: 1
   - **Acceptance Criteria**:
     - User can delete a task with confirmation
     - Task is removed from the list
     - Action cannot be undone (for now)

### Epic 3: Data Persistence & Enhancement
**Priority: LOW**

5. **US-005**: Persist Tasks
   - **As a** user
   - **I want to** have my tasks saved automatically
   - **So that** I don't lose my data when I refresh the page
   - **Story Points**: 2
   - **Acceptance Criteria**:
     - Tasks are saved to localStorage
     - Tasks persist after page refresh
     - No data loss occurs

6. **US-006**: Task Search & Filter
   - **As a** user
   - **I want to** search and filter tasks by status or priority
   - **So that** I can quickly find specific tasks
   - **Story Points**: 2
   - **Acceptance Criteria**:
     - User can search tasks by title
     - User can filter by status (to-do, in-progress, done)
     - User can filter by priority (high, medium, low)
     - Filters can be combined

## Sprint Planning

### Sprint 1 (Days 2-3): Core CRUD Operations - HIGH Priority
- US-001: Create Task
- US-002: View Task List

### Sprint 2 (Days 4-5): Advanced Features - MEDIUM Priority
- US-003: Update Task
- US-004: Delete Task

### Sprint 3 (Day 6): Enhancement & Deploy - LOW Priority
- US-005: Persist Tasks
- US-006: Task Search & Filter (if time permits)

## Definition of Done
- [ ] Feature works as described in acceptance criteria
- [ ] Unit tests written and passing
- [ ] Code reviewed by pair partner
- [ ] Committed to Git with descriptive message
- [ ] Customer has reviewed and approved
- [ ] No breaking changes to existing features

## Priority Summary
- **HIGH (11 points)**: US-001 (3) + US-002 (2) = 5 points
- **MEDIUM (4 points)**: US-003 (3) + US-004 (1) = 4 points  
- **LOW (4 points)**: US-005 (2) + US-006 (2) = 4 points
- **Total**: 13 story points across 6 user stories