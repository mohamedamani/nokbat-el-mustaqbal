# Contributing to Nokbat El Mustaqbal

We welcome contributions to make education more accessible and effective for Algerian students! This document provides guidelines for contributing to the project.

## 🌟 Ways to Contribute

### Code Contributions
- **Bug fixes** - Help us identify and fix issues
- **Feature development** - Add new educational features
- **Performance improvements** - Optimize for better user experience
- **Accessibility enhancements** - Make the platform more inclusive
- **Internationalization** - Improve Arabic, French, and English support

### Content Contributions
- **Educational content** - Lessons, exercises, and explanations
- **Curriculum alignment** - Ensure content matches Ministry standards
- **Arabic translations** - Help with localization
- **Cultural context** - Add Algerian-specific examples and references

### Documentation
- **Code documentation** - Improve inline comments and README files
- **User guides** - Help students, parents, and teachers use the platform
- **Developer documentation** - Make it easier for others to contribute
- **API documentation** - Document interfaces and services

### Testing and Quality Assurance
- **Manual testing** - Test features on different devices and browsers
- **Automated testing** - Write unit, integration, and E2E tests
- **Accessibility testing** - Ensure compliance with WCAG guidelines
- **Performance testing** - Identify bottlenecks and optimization opportunities

## 🚀 Getting Started

### Prerequisites

1. **Node.js 18+** and **npm 8+** installed
2. **Git** for version control
3. Basic knowledge of **React**, **TypeScript**, and **Tailwind CSS**
4. Understanding of **Algerian education system** (helpful but not required)

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/nokbat-el-mustaqbal.git
   cd nokbat-el-mustaqbal
   ```
3. **Install dependencies**:
   ```bash
   npm ci
   ```
4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. **Start development server**:
   ```bash
   npm run dev
   ```

### Development Workflow

1. **Make your changes** in small, logical commits
2. **Write or update tests** for your changes
3. **Run the test suite**:
   ```bash
   npm run test
   npm run lint
   npm run type-check
   ```
4. **Test manually** on different devices/browsers
5. **Commit with descriptive messages** (see commit conventions below)
6. **Push to your fork** and **create a pull request**

## 📝 Code Standards

### Code Style

We use automated tools to maintain consistent code style:

- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting (auto-formatted on save)
- **TypeScript** - Type safety and better developer experience

Run these commands before committing:
```bash
npm run lint:fix  # Fix linting issues
npm run type-check  # Verify TypeScript types
```

### Naming Conventions

#### Files and Directories
- **Components**: PascalCase (`StudentDashboard.tsx`)
- **Utilities**: camelCase (`offlineManager.ts`)
- **Pages**: PascalCase (`LoginPage.tsx`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_ENDPOINTS.ts`)

#### Variables and Functions
- **Variables**: camelCase (`currentUser`, `isLoggedIn`)
- **Functions**: camelCase (`calculateGrade`, `validateEmail`)
- **React components**: PascalCase (`StudentCard`, `ProgressChart`)
- **Hooks**: start with \"use\" (`useAuth`, `useLocalStorage`)

#### CSS Classes
- **Tailwind utilities**: Use utility classes when possible
- **Custom classes**: kebab-case (`arabic-text`, `student-card`)
- **BEM methodology**: For complex components (`card__header--active`)

### TypeScript Guidelines

#### Type Definitions
```typescript
// Good: Explicit types for better clarity
interface Student {
  id: string;
  name: string;
  grade: number;
  subjects: Subject[];
}

// Good: Use proper generics
const useApi = <T>(url: string): Promise<T> => {
  return fetch(url).then(response => response.json());
};

// Avoid: any types
const badExample: any = getSomeData(); // Don't do this
```

#### Props and State
```typescript
// Good: Define prop interfaces
interface StudentCardProps {
  student: Student;
  onEdit: (id: string) => void;
  showProgress?: boolean;
}

const StudentCard: React.FC<StudentCardProps> = ({
  student,
  onEdit,
  showProgress = true
}) => {
  // Component implementation
};
```

### React Best Practices

#### Component Structure
```typescript
// Recommended component structure
import React, { useState, useEffect } from 'react';
import { SomeService } from '@/services';
import { Student } from '@/types';

interface Props {
  // Props interface
}

export const MyComponent: React.FC<Props> = (props) => {
  // 1. State declarations
  const [data, setData] = useState<Student[]>([]);
  
  // 2. Custom hooks
  const { user } = useAuth();
  
  // 3. Effects
  useEffect(() => {
    // Side effects
  }, []);
  
  // 4. Event handlers
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle submission
  };
  
  // 5. Render
  return (
    <div className=\"component-container\">
      {/* JSX content */}
    </div>
  );
};
```

#### Performance Considerations
```typescript
// Use React.memo for expensive components
export const ExpensiveComponent = React.memo<Props>(({ data }) => {
  return <div>{/* Expensive rendering */}</div>;
});

// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return performExpensiveCalculation(data);
}, [data]);

// Use useCallback for event handlers passed to children
const handleClick = useCallback((id: string) => {
  onItemClick(id);
}, [onItemClick]);
```

## 🧪 Testing Guidelines

### Unit Testing

We use **Vitest** with **React Testing Library**:

```typescript
// Example: StudentCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { StudentCard } from './StudentCard';
import { mockStudent } from '@/test/mocks';

describe('StudentCard', () => {
  const mockOnEdit = jest.fn();
  
  beforeEach(() => {
    mockOnEdit.mockClear();
  });
  
  it('renders student information', () => {
    render(
      <StudentCard 
        student={mockStudent} 
        onEdit={mockOnEdit} 
      />
    );
    
    expect(screen.getByText(mockStudent.name)).toBeInTheDocument();
    expect(screen.getByText(`Grade: ${mockStudent.grade}`)).toBeInTheDocument();
  });
  
  it('calls onEdit when edit button is clicked', () => {
    render(
      <StudentCard 
        student={mockStudent} 
        onEdit={mockOnEdit} 
      />
    );
    
    fireEvent.click(screen.getByText('Edit'));
    expect(mockOnEdit).toHaveBeenCalledWith(mockStudent.id);
  });
});
```

### Testing Best Practices

1. **Test behavior, not implementation**
2. **Use meaningful test descriptions**
3. **Mock external dependencies**
4. **Test edge cases and error conditions**
5. **Maintain high test coverage** (aim for >80%)

### Accessibility Testing

```typescript
// Test accessibility
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## 🌐 Internationalization (i18n)

### Arabic Language Support

#### RTL Layout
```css
/* Use Tailwind utilities for RTL */
.arabic-content {
  @apply text-right dir-rtl;
}

/* Or conditional classes */
<div className={`${isArabic ? 'text-right' : 'text-left'}`}>
```

#### Font Usage
```css
/* Arabic fonts */
.arabic-text {
  font-family: 'Noto Naskh Arabic', serif;
}

/* Latin fonts */
.latin-text {
  font-family: 'Inter', sans-serif;
}
```

### Content Guidelines

1. **Cultural Sensitivity**: Use examples relevant to Algerian culture
2. **Educational Context**: Align with Algerian curriculum standards
3. **Language Quality**: Ensure proper Arabic grammar and terminology
4. **Accessibility**: Support screen readers in multiple languages

## 📐 Design Guidelines

### Color Palette

We use a design system inspired by the Algerian flag:

```typescript
// Primary colors
const colors = {
  algerian: {
    green: '#006233',  // Official Algerian green
    white: '#ffffff',  // Pure white
    red: '#d21034',    // Official Algerian red
  },
  primary: {
    // Modern blue palette for UI elements
    500: '#0ea5e9',
    600: '#0284c7',
  },
  // ... other colors
};
```

### Typography

- **Headings**: Bold, clear hierarchy
- **Body text**: High contrast for readability
- **Arabic text**: Appropriate line spacing and font sizes
- **Code**: Monospace fonts for technical content

### Responsive Design

- **Mobile-first**: Design for phones, then scale up
- **Breakpoints**: Follow Tailwind's default breakpoints
- **Touch targets**: Minimum 44px for interactive elements
- **Offline indicators**: Clear status when offline

## 🔍 Code Review Process

### Pull Request Guidelines

1. **Clear title and description**
2. **Link to related issues**
3. **List changes made**
4. **Include screenshots** for UI changes
5. **Add testing instructions**
6. **Ensure CI passes**

### Review Checklist

#### Functionality
- [ ] Feature works as described
- [ ] No breaking changes to existing functionality
- [ ] Error handling is appropriate
- [ ] Performance impact is acceptable

#### Code Quality
- [ ] Code follows style guidelines
- [ ] TypeScript types are correct
- [ ] No console logs or debug code
- [ ] Comments explain complex logic

#### Testing
- [ ] Tests pass locally and in CI
- [ ] New functionality is tested
- [ ] Edge cases are covered
- [ ] Accessibility is maintained

#### Security
- [ ] No sensitive data exposed
- [ ] Input validation is proper
- [ ] No security vulnerabilities introduced

### Review Response

- **Be responsive** to feedback
- **Ask questions** if feedback is unclear
- **Make requested changes** promptly
- **Thank reviewers** for their time

## 🎓 Educational Content Guidelines

### Curriculum Alignment

1. **Follow Ministry standards** exactly
2. **Age-appropriate content** for each grade level
3. **Progressive difficulty** within subjects
4. **Cross-curricular connections** where appropriate

### Content Quality

- **Accuracy**: All information must be factually correct
- **Clarity**: Explanations should be clear and concise
- **Engagement**: Content should be interesting and interactive
- **Accessibility**: Support different learning styles and abilities

### AI Teaching Implementation

```typescript
// Example: AI explanation structure
interface AIExplanation {
  concept: string;
  steps: {
    step: number;
    description: string;
    example?: string;
    visual?: string;
  }[];
  commonMistakes: string[];
  practiceProblems: Problem[];
}
```

## 🐛 Bug Reports

### Before Reporting

1. **Search existing issues** to avoid duplicates
2. **Try to reproduce** the bug consistently
3. **Check if it's fixed** in the latest version
4. **Gather relevant information** (browser, device, etc.)

### Bug Report Template

```markdown
## Bug Description
Clear and concise description of the bug.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Environment
- Browser: [e.g. Chrome 91]
- Device: [e.g. iPhone 12, Desktop]
- OS: [e.g. iOS 14.6, Windows 10]
- App Version: [e.g. 1.0.2]

## Screenshots
If applicable, add screenshots to help explain the problem.

## Additional Context
Any other context about the problem.
```

## 💡 Feature Requests

### Before Requesting

1. **Check existing requests** to avoid duplicates
2. **Consider the educational value** of the feature
3. **Think about implementation complexity**
4. **Consider different user types** (students, parents, teachers)

### Feature Request Template

```markdown
## Feature Description
Clear and concise description of the feature.

## Problem Statement
What problem does this feature solve?

## Proposed Solution
Describe your preferred solution.

## Alternative Solutions
Other approaches you've considered.

## Educational Value
How does this improve the learning experience?

## User Types
Which users would benefit from this feature?

## Implementation Notes
Any technical considerations or constraints.
```

## 🏆 Recognition

### Contributor Acknowledgments

We recognize contributors in several ways:

- **README credits** for significant contributions
- **Release notes** mention for features and fixes
- **Annual contributor report** highlighting achievements
- **Educational impact metrics** showing how contributions help students

### Types of Contributions

- **Code**: Bug fixes, features, performance improvements
- **Content**: Educational materials, translations, examples
- **Documentation**: Guides, tutorials, API docs
- **Community**: Helping other contributors, mentoring
- **Testing**: Finding bugs, writing tests, QA
- **Design**: UI/UX improvements, accessibility

## 📞 Getting Help

### Communication Channels

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - General questions and ideas
- **Email** - security@nokbat-el-mustaqbal.dz for security issues
- **Documentation** - Check DEVELOPER_GUIDE.md first

### Response Times

- **Bug reports**: 48 hours for initial response
- **Feature requests**: 1 week for initial review
- **Pull requests**: 72 hours for initial review
- **Security issues**: 24 hours for critical issues

### Community Guidelines

1. **Be respectful** - We're all here to help students learn
2. **Be patient** - Volunteers contribute in their free time
3. **Be constructive** - Provide actionable feedback
4. **Be inclusive** - Welcome contributors of all skill levels
5. **Focus on education** - Remember our mission to improve learning

---

## 📜 License

By contributing to Nokbat El Mustaqbal, you agree that your contributions will be licensed under the same MIT License that covers the project.

---

**🌟 Thank you for contributing to the future of education in Algeria!**

Every contribution, no matter how small, helps make quality education more accessible to Algerian students. Together, we're building the future elite of our nation.