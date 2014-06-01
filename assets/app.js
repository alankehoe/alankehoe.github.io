angular.module('alankehoe.github.io', ['ui.bootstrap'])

    .controller('MainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.arrayToMatrix = function (list, howMany) {
            var idx = 0;
            var result = [];

            while (idx < list.length) {
                if (idx % howMany === 0) result.push([]);
                result[result.length - 1].push(list[idx++]);
            }

            return result;
        };

        $scope.contacts = [
            {
                href: 'tel:+353870608580',
                text: '+353 87 0608580',
                icon: 'fa-phone'
            },
            {
                href: 'mailto:alan.kehoe8@mail.dcu.ie?subject=Seen your resume on alankehoe.github.io',
                text: 'Alan.Kehoe8@mail.dcu.ie',
                icon: 'fa-pencil'
            },
            {
                href: 'https://www.google.com/maps/place/Dublin/',
                text: 'Dublin, Ireland',
                icon: 'fa-map-marker'
            },
            {
                href: 'https://github.com/alankehoe',
                text: 'Alankehoe',
                icon: 'fa-github'
            },
            {
                href: 'https://ie.linkedin.com/in/alankehoe111',
                text: 'Alankehoe111',
                icon: 'fa-linkedin'
            },
            {
                href: 'https://www.facebook.com/kehoea8',
                text: 'Kehoea8',
                icon: 'fa-facebook'
            }
        ];

        $scope.skills = [
            {
                name: 'Java',
                level: '90'
            },
            {
                name: 'Python',
                level: '70'
            },
            {
                name: 'Ruby',
                level: '85'
            },
            {
                name: 'HTML',
                level: '90'
            },
            {
                name: 'CSS',
                level: '60'
            },
            {
                name: 'JavaScript',
                level: '70'
            }
        ];

        $scope.educations = [
            {
                name: 'Dublin City University',
                degree: 'B.Sc. in Computer Applications',
                dates: 'SEP 2010 - Present',
                blurb: 'Currently in my final year of Computer Applications. Expected to finish in June 2014'
            },
            {
                name: 'Gorey Community School',
                degree: 'Leaving certificate',
                dates: 'SEP 2003 - JUNE 2009',
                blurb: ''
            }
        ];

        $scope.experiences = [
            {
                name: 'BearingPoint Ireland',
                position: 'Intern Software Developer',
                dates: 'APR 2013 - SEP 2013',
                roles: [
                    'Responsible for migration of system architecture diagrams into iServer.',
                    'Involved in developing release notes tool for subversion.',
                    'Experience in TeamCity continuous integration server.',
                    'Experience in Nunit and Junit testing frameworks.',
                    'Contributed to GWTP dashboard application.',
                    'Experience in web frameworks such as AngularJS',
                    'Experience with Selenium web driver tests.'
                ]
            }
        ];

        $scope.interests = [
            'Web Development', 'Mobile Development', 'Automotive Systems', 'Ruby on Rails',
            'AngularJS', 'Linux Administration', 'Virtualization', 'Networking'
        ];

        $scope.projects = [
            {
                name: 'FleetOnRails',
                url: 'http://blog.fleetonrails.eu',
                thumb: 'assets/img/fleetonrails.png',
                blurb: 'Fleet management software'
            },
            {
                name: 'PiMyRide',
                url: 'http://pimyride.com',
                thumb: 'assets/img/pimyride.png',
                blurb: 'OBD Logging from a Raspberry pi'
            },
            {
                name: 'Ziemniak',
                url: 'https://github.com/alankehoe/ziemniak',
                thumb: 'assets/img/ziemniak.png',
                blurb: 'Open source machine translation comparison tool'
            }
        ];

        $timeout(function () {
            $scope.ready = true;
        }, 1000);
    }]);
